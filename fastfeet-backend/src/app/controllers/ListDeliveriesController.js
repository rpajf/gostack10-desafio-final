import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

class ListDeliveriesController {
  async index(req, res) {
    const { id } = req.params;

    const delivieries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        signature_id: null,
      },
      attributes: [
        'id',
        'product',
        'deliveryman_id',
        'status',
        'created_at',
        'start_date',
        'end_date',
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

    return res.json(delivieries);
  }
}

export default new ListDeliveriesController();
