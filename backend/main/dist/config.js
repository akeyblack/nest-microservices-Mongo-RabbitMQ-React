"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const env = process.env;
const config = () => {
    var _a;
    return ({
        database: {
            uri: (_a = env.uri) !== null && _a !== void 0 ? _a : "mongodb://pizza:pizza@localhost:27017/",
        }
    });
};
exports.config = config;
//# sourceMappingURL=config.js.map