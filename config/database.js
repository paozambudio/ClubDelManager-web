import mongoose, { Mongoose } from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

const dbConnect = async () => {
  try {
    if (global.mongoose && global.mongoose.conn) {
      console.log("Connected from previous");
      return global.mongoose.conn;
    } else {
      const conString = process.env.MONGODB_URI;

      const promise = mongoose.connect(conString, {
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };

      console.log("Newly connected");
      return await promise;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
};

export default dbConnect;

/*export const disconnect = () => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};
*/
