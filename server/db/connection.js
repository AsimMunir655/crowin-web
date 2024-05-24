import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log(chalk.bold.green("✓"), chalk.yellow("Db Connected"));
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
