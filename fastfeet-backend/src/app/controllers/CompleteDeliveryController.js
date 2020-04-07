import * as Yup from 'yup';

import { parseISO } from 'date-fns';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class CompleteDeliveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      signature_id: Yup.number().required(),
      end_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { delivery_id, signature_id, end_date } = req.body;
    const end_dateISO = parseISO(end_date);

    const { deliverymanId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman was not found' });
    }
    try {
      const signature = await File.findOne({
        where: {
          id: signature_id,
        },
      });

      if (!signature) {
        return res.status(400).json({
          error: 'Need signature of the recipient to finish the delivery',
        });
      }

      const delivery = await Delivery.findOne({
        where: {
          id: delivery_id,
          status: 'Retirada',

          end_date: null,
        },
        include: [
          {
            model: Deliveryman,
            attributes: ['id', 'email', 'name'],
          },
        ],
      });
      const startedDate = delivery.start_date;
      if (!startedDate) {
        res.status(400).json({ error: 'Delivery needs to be retrieved' });
      }

      if (!delivery) {
        return res.status(400).json({ error: 'Delivery was not found' });
      }

      await delivery.update({
        end_dateISO,
        status: 'Entregue',
        signature_id,
      });
      return res.json(delivery);
    } catch (err) {
      return res.status(400).json({
        error: 'The order needs to be retrieved to finish the delivery',
      });
    }
  }
}

export default new CompleteDeliveryController();
