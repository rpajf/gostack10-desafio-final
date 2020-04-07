import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    delivery: {
      type: Number,
      required: true,
    },
    recipient: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveryman: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // fields createdAt, updatedAt
  }
);
export default mongoose.model('Notification', NotificationSchema);
