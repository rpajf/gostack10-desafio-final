import * as Yup from 'yup';

import { parseISO, setHours, isWithinInterval } from 'date-fns';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class DeliveryWithDrawlController {
  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { deliverymanId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    const { start_date, delivery_id } = req.body;

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman was not found' });
    }

    const start_dateISO = parseISO(start_date);
    const start = setHours(new Date(start_dateISO), 8);
    const end = setHours(new Date(start_dateISO), 18);
    const withdrawlDateRange = isWithinInterval(new Date(start_dateISO), {
      start,
      end,
    });
    // withdrawl dates between  time interval of 8:00 to 18:00

    if (!withdrawlDateRange) {
      return res.status(400).json({
        error: 'You can only withdrawl deliveries from 8:00 to 18:00',
      });
    }

    const delivery = await Delivery.findOne({
      where: { id: delivery_id },
      include: [
        {
          model: Deliveryman,
          attributes: ['id', 'email', 'name'],
        },
      ],
    });
    if (!delivery) {
      return res.status(400).json({ error: 'Invalid id for delivery' });
    }
    if (delivery.deliveryman_id !== deliveryman.id) {
      return res
        .status(400)
        .json({ error: 'This delivery was not registered for you' });
    }
    await delivery.update({
      start_date: start_dateISO,
      status: 'Retirada',
    });
    const dayLimit = await Delivery.findAndCountAll({
      where: {
        deliveryman_id: deliverymanId,
        start_date,
      },
    });
    if (dayLimit.count > 5) {
      return res
        .status(401)
        .json({ error: 'You can withdrawl only 5 deliveries per day' });
    }
    return res.json({ delivery, dayLimit });
  }
}

export default new DeliveryWithDrawlController();
