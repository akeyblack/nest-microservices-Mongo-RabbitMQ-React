const env = process.env;

export const config = () => ({
  database: {
    uri: env.uri ?? "mongodb://pizza:pizza@localhost:27017/",
  }
});