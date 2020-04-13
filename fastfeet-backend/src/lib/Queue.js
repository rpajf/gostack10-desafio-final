import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};
    // all jobs from the application

    this.init();
    // initialize queues
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      // props and methods from class
      this.queues[key] = {
        bee: new Bee(key, {
          // instance connecting redis and the method handle
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    // each time a new mail is sent, it is dispached to the queue
    return this.queues[queue].bee.createJob(job).save();
    // queue -> which new one is sent
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
      // listening to failure events after tempting
    });
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
