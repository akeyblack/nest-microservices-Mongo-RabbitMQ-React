"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const microservices_1 = require("@nestjs/microservices");
const env = process.env;
const config = () => {
    var _a, _b;
    return ({
        database: {
            uri: (_a = env.uri) !== null && _a !== void 0 ? _a : "mongodb://pizza:pizza@localhost:27017/",
        },
        rabbitmq: {
            name: 'MAIN',
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: [(_b = env.RABBITMQ_URL) !== null && _b !== void 0 ? _b : 'amqp://pizza:pizza@localhost:5672'],
                queue: 'telegram-orders',
                queueOptions: {
                    durable: true
                },
            },
        },
    });
};
exports.config = config;
//# sourceMappingURL=config.js.map