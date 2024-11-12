import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
    try {
       const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log("Database connected:", conn.connection.host);
    } catch (error) {
        console.log("error while connecting to database:", error.message);
        process.exit(1);
    }
}