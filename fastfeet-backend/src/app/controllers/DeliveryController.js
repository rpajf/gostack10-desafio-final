import * as Yup from 'yup';

import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Notification from '../schemas/Notification';

class DeliveryController {
  async index(req, res) {
    const { product } = req.query;
    const { page = 1 } = req.query;

    const allDeliveries = await Delivery.findAndCountAll({
      where: {
        product: {
          [Op.like]: `%${product}%`,
        },
      },
      order: ['created_at'],
      limit: 6,
      offset: (page - 1) * 6,
      attributes: [
        'id',
        'product',
        'status',
        'start_date',
        'end_date',
        'created_at',
      ],
      include: [
        {
          model: Recipient,
          attributes: [
            'id',
            'name',
            'street_adress',
            'state',
            'city',
            'postal_code',
          ],
        },
        {
          model: Deliveryman,
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(allDeliveries);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      deliveryman_id: Yup.number().required(),
      recipient_id: Yup.number().required(),
      product: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Validation fails' });
    }

    const { deliveryman_id, recipient_id, product } = req.body;
    const delivery = await Delivery.create({
      deliveryman_id,
      recipient_id,
      product,
    });

    const recipientInfo = await Recipient.findOne({
      where: {
        id: recipient_id,
      },
    });
    // Notify deliveryman
    await Notification.create({
      content: `Nova entrega disponível,destinatario:
      ${recipientInfo.name}, produto: ${delivery.product} `.replace(/\n/g, ''),
      delivery: delivery.id,
      recipient: recipient_id,
      deliveryman: delivery.deliveryman_id,
    });
    return res.json(delivery);
  }

  async finishDelivery(signature_id, delivery_id) {
    const delivery = await Delivery.findOne({
      where: { id: delivery_id },
      include: [
        {
          model: Deliveryman,
        },
      ],
    });
    try {
      await delivery.update({ signature_id });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }
}

export default new DeliveryController();
