import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }
  // import cancelationMailf from..

  // the prop key can easily be accessed
  // CancellationMail.key()

  async handle({ data }) {
    const { delivery, deliveryProblem } = data;

    console.log('A fila executou');
    await Mail.sendMail({
      to: `${delivery.Deliveryman.name} <${delivery.Deliveryman.email}>`,
      from: 'fastfeet@contact.com',
      subject: 'Encomenda cancelada',
      recipient: delivery.recipient_name,
      template: 'cancellation',
      context: {
        delivery: delivery.product,
        deliveryman: delivery.Deliveryman.name,
        problem: deliveryProblem.description,
        date: format(
          parseISO(delivery.canceled_at),
          "'dia' dd 'de' MMMM', às'H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
