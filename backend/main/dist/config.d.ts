import { Transport } from '@nestjs/microservices';
export declare const config: () => {
    database: {
        uri: string;
    };
    rabbitmq: {
        name: string;
        transport: Transport;
        options: {
            urls: string[];
            queue: string;
            queueOptions: {
                durable: boolean;
            };
        };
    };
};
