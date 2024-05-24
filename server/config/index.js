import dotenv from "dotenv";

dotenv.config({ path: "server/.env" });

const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
};

export default config;
