import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL_APPLICATION",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(`Error occured while connecting to the database: ${err}`);
    });
};
