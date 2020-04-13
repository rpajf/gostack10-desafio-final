import DeliveryProblems from '../models/DeliveryProblems';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class DeliveryProblemsController {
  async store(req, res) {
    const { id } = req.params;
    // id of the deliveryman that will register the problem

    const deliveryman = await Deliveryman.findOne({
      where: { id },
    });
    if (!deliveryman) {
      return res.status(400).json({
        error: 'You need to inform you ID, to register a delivery problem',
      });
    }

    const { delivery_id, description } = req.body;
    const delivery = await Delivery.findOne({
      where: { id: delivery_id },
    });
    const delivery_problem = await DeliveryProblems.create({
      delivery_id,
      description,
    });

    return res.json({
      deliveryman,
      delivery_problem,
      delivery,
    });
  }

  async index(req, res) {
    const problemsPackages = await DeliveryProblems.findAll({
      attributes: ['id', 'description', 'delivery_id'],
    });
    return res.json(problemsPackages);
  }

  async update(req, res) {
    const { problemId } = req.params;

    const deliveryProblem = await DeliveryProblems.findByPk(problemId);

    if (!deliveryProblem) {
      return res.status(400).json({ error: 'This problem wasnt found' });
    }

    const delivery = await Delivery.findByPk(deliveryProblem.delivery_id, {
      include: [
        {
          model: Deliveryman,
          attributes: ['name', 'email'],
        },
      ],
    });
    if (delivery.end_date !== null && delivery.signature_id !== null) {
      return res.status(400).json({ error: 'This delivery was completed' });
    }
    await delivery.update({ canceled_at: new Date(), status: 'Cancelada' });
    await deliveryProblem.destroy();

    await Queue.add(CancellationMail.key, {
      delivery,
      deliveryProblem,
    });

    return res.status(200).json({ delivery });
  }
}

export default new DeliveryProblemsController();
