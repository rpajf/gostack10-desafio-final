import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street_adress: Sequelize.STRING,
        street_number: Sequelize.INTEGER,
        adress_line2: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        postal_code: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipient;
