import Deliveryman from '../models/Deliveryman';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findOne({
      where: { id },
    });
    if (!deliveryman) {
      return res
        .status(401)
        .json({ error: 'Inform your ID to load your notifications' });
    }
    const notifications = await Notification.find({
      deliveryman: req.params.id,
    })
      .sort('createdAt')
      .limit(10);
    return res.json(notifications);
  }
}
export default new NotificationController();
