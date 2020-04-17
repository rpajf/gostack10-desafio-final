import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './middlewares/auth';

import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import ListDeliveriesController from './app/controllers/ListDeliveriesController';
import FileController from './app/controllers/FileController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';
import NotificationController from './app/controllers/NotificationController';
import DeliveryWithdrawlController from './app/controllers/DeliveryWithdrawlController';
import CompleteDeliveryController from './app/controllers/CompleteDeliveryController';
import ListCompletedController from './app/controllers/ListCompletedController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/:id', DeliverymanController.show);

// Deliveries assigned to deliveryman
routes.get('/deliveryman/:id/deliveries', ListDeliveriesController.index);
routes.get(
  '/deliveryman/:deliverymanId/completed',
  ListCompletedController.index
);

// Deliveryman reports a problem
routes.post('/delivery/:id/problems', DeliveryProblemsController.store);

routes.post(
  '/deliveryman/:deliverymanId/update',
  DeliveryWithdrawlController.store
);

routes.post(
  '/deliveryman/:deliverymanId/finish',
  CompleteDeliveryController.store
);
// Deliveryman lists all notifications assigned to him
routes.get('/notifications/:id', NotificationController.index);

routes.get('/deliveries', DeliveryController.index);

// Admin routes
routes.use(authMiddleware);

routes.get('/delivery/problems', DeliveryProblemsController.index);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);

routes.post('/files', upload.single('file'), FileController.store);
routes.put('/delivery/:problemId/problems', DeliveryProblemsController.update);

routes.get('/deliveryman', DeliverymanController.index);
routes.put('/deliveryman/:deliverymanId', DeliverymanController.update);
routes.post('/deliveryman', DeliverymanController.store);

routes.post('/deliveries', DeliveryController.store);

export default routes;
