import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';
import Deliveryman from '../app/models/Deliveryman';
import Delivery from '../app/models/Delivery';
import DeliveryProblems from '../app/models/DeliveryProblems';
import databaseConfig from '../config/database';

const models = [User, Recipient, File, Deliveryman, Delivery, DeliveryProblems];

class Database {
  constructor() {
    this.init();
    this.associate();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/fastfeet',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
