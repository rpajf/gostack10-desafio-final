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
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    return res.json(deliverymans);
  }

  async show(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'created_at', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
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
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number().notRequired(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Validation fails' });
    }
    const { deliverymanId } = req.params;
    const { name, email, avatar_id } = req.body;

    const avatarExists = await File.findByPk(avatar_id);

    if (!avatarExists) {
      return res.status(400).json({ error: 'Avatar does not exists' });
    }

    const deliveryman = await Deliveryman.findByPk(deliverymanId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    await deliveryman.update({ name, email, avatar_id });
    console.log(deliveryman.avatar.url);

    return res.json({ name, email, avatar_id });
  }
}

export default new DeliverymanController();
