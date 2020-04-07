export default function createDelivery(recipient, product, deliveryman) {
  return {
    type: '@delivery/UPDATE_REQUEST',
    payload: { recipient, product, deliveryman },
  };
}
