import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

class ListCompletedController {
  async index(req, res) {
    const { deliverymanId } = req.params;

    const deliveriesDone = await Delivery.findAll({
      where: {
        deliveryman_id: deliverymanId,
        signature_id: { [Op.not]: null },
      },
      attributes: [
        'id',
        'deliveryman_id',
        'product',
        'status',
        'signature_id',
        'start_date',
        'end_date',
        'canceled_at',
      ],
      order: ['id'],
      include: [
        {
          model: Deliveryman,
          attributes: ['id', 'name', 'avatar_id', 'email'],
        },
        {
          model: Recipient,
          attributes: [
            'id',
            'name',
            'city',
            'state',
            'street_adress',
            'street_number',
            'postal_code',
          ],
        },
      ],
    });

    return res.json(deliveriesDone);
  }
}

export default new ListCompletedController();
