const env = process.env;

export const config = () => ({
  rabbitmqUrl: env.RABBITMQ_URL ?? 'amqp://pizza:pizza@localhost:5672'
});
