import { Transport } from '@nestjs/microservices';
const env = process.env;

export const config = () => ({
  database: {
    uri: env.uri ?? "mongodb://pizza:pizza@localhost:27017/",
  },
  rabbitmq: {
    name: 'MAIN',
    transport: Transport.RMQ,
    options: {
      urls: [env.RABBITMQ_URL ?? 'amqp://pizza:pizza@localhost:5672'],
      queue: 'telegram-orders',
      queueOptions: {
        durable: true
      },
    },
  },
});