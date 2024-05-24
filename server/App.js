// @Importing Modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./db/connection.js";
import morgan from "morgan";
import chalk from "chalk";
import apiRouter from "./routes/routes.js";
import path from "path";

//@Defining PORT
const PORT = process.env.PORT || 3000;

// @ config.env

//@initializing App
const app = express();

//@Routes
apiRouter(app);
// @ CLIENT AND ADMIN BUILD
app.use("/src/data", express.static(path.join(__dirname, "data")));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan("dev"));
app.use(cors({ origin: true }));

app.use("/admin", express.static(path.join(__dirname, "../admin/build")));

app.get("/admin/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../admin/build/index.html"));
});
app.use("/", express.static(path.join(__dirname, "..", "client", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
});

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(
    chalk.bold.red(`ERROR MESSAGE: `),
    chalk.bold.blue(`${err.message}`)
  );
  // console.log(chalk.bold.red(`ERROR STACK: `), `${err.stack}`);
  console.log(chalk.red("Shutting Down Server due to Uncaught Exception"));
  process.exit(1);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(
    chalk.bold.red(`ERROR MESSAGE: `),
    chalk.bold.blue(`${err.message}`)
  );
  console.log(chalk.bold.red(`ERROR STACK: `), `${err.stack}`);
  console.log(
    chalk.bold.red(
      "Shutting down the server due to Unhandled Promise rejection"
    )
  );
  process.exit(1);
});

//@Starting Server
app.listen(PORT, (err) => {
  if (err) console.log(chalk.bold.red(`${err.message}`), err);
  console.log(chalk.bold.green("✓"), `Listening on port ${PORT}`);
});
// @Connecting to Database
dbConnection();
