import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const { name } = req.query;
    const { page = 1 } = req.query;
    const deliverymans = await Deliveryman.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      order: ['created_at'],
      limit: 6,
      offset: (page - 1) * 6,
      attributes: ['id', 'name', 'email', 'avatar_id'],
    });
    return res.json(deliverymans);
  }

  async show(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'created_at'],
      include: [
        {
          model: File,
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res
        .status(400)
        .json({ error: 'This deliveryman does not exists' });
    }

    return res.json(deliveryman);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      avatar_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Validation fails' });
    }
    const { name, email, avatar_id } = req.body;

    const deliveryman = await Deliveryman.create({
      name,
      email,
      avatar_id,
    });
    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string(),
      avatar_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Validation fails' });
    }
    // eslint-disable-next-line no-unused-vars
    const { deliverymanId } = req.params;
    const { email, avatar_id } = req.body;

    const deliveryman = await Deliveryman.findOne({
      where: { id: deliverymanId, avatar_id },
      include: [
        {
          model: File,

          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    await deliveryman.update({ email, avatar_id });

    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
