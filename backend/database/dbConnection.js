import mongoose from "mongoose";


// connecting to DB
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HMS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database:, ${err}`);
    });
};