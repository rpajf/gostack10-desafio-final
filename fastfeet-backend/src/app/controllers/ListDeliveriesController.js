import Delivery from '../models/Delivery';

class ListDeliveriesController {
  async index(req, res) {
    const { id } = req.params;

    const delivieries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
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
      order: ['created_at'],
    });

    return res.json(delivieries);
  }
}

export default new ListDeliveriesController();
