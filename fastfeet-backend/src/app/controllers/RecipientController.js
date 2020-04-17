import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { name } = req.query;
    const { page = 1 } = req.query;
    const recipients = await Recipient.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      order: ['created_at'],
      limit: 10,
      offset: (page - 1) * 10,
    });
    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street_adress: Yup.string().required(),
      adress_line2: Yup.string().required(),
      street_number: Yup.number()
        .required()
        .positive(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      postal_code: Yup.number()
        .required()
        .positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {
      name,
      street_adress,
      adress_line2,
      street_number,
      state,
      city,
      postal_code,
    } = await Recipient.create(req.body);
    return res.json({
      name,
      street_adress,
      adress_line2,
      street_number,
      state,
      city,
      postal_code,
    });
  }
}

export default new RecipientController();
