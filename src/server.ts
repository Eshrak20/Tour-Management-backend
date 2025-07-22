/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("Connected to DB!!");
    server = app.listen(envVars.PORT, () => {
      console.log(`Server is listening to port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
    await startServer()
    await seedSuperAdmin()
})()

const shutdownServer = (message: string, error?: unknown) => {
  console.log(message);
  if (error) {
    console.error(error);
  }

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on("SIGTERM", () => {
  shutdownServer("SIGTERM signal received... Server shutting down...");
});

process.on("SIGINT", () => {
  shutdownServer("SIGINT signal received... Server shutting down...");
});

process.on("unhandledRejection", (err) => {
  shutdownServer(
    "Unhandled Rejection detected... Server shutting down...",
    err
  );
});

process.on("uncaughtException", (err) => {
  shutdownServer("Uncaught Exception detected... Server shutting down...", err);
});
