// Importing mongoose library for MongoDB interaction
import mongoose from "mongoose";

// Retrieving MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Creating a global variable to cache the MongoDB connection
let cached = (global as any).mongoose || { conn: null, promise: null };

// Function to establish connection to the MongoDB database
export const connectToDatabase = async () => {
  // If connection is already established, return the cached connection
  if (cached.conn) return cached.conn;

  // If MongoDB URI is not provided, throw an error
  if (!MONGODB_URI) throw new Error("MongoDB is not connected");

  // If connection is not yet established, initiate connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently", // Specify the name of the database
      bufferCommands: false, // Disable buffering of commands
    });

  // Await the promise to establish connection and assign it to the cached connection
  cached.conn = await cached.promise;

  // Return the established connection
  return cached.conn;
};
