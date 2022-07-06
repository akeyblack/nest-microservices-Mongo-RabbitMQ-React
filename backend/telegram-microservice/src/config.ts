import { Transport, MicroserviceOptions } from '@nestjs/microservices';
const env = process.env;

export const config = () => ({
  rabbitmq: {
    transport: Transport.RMQ,
    options: {
      urls: [env.RABBITMQ_URL ?? 'amqp://pizza:pizza@localhost:5672'],
      queue: 'telegram-orders',
      queueOptions: {
        durable: true,
      },
    },
  } as MicroserviceOptions,
  telegram: env.TELEGRAM,
  telegramSecretPhrase: env.TELEGRAM_SECRET_PHRASE,
  database: {
    uri: env.uri ?? "mongodb://pizza:pizza@localhost:27017/",
  },
});
