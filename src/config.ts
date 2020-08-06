import dotenv from "dotenv";

dotenv.config();

/**
 * Define all variables you need for your application
 */
export const appPort = process.env.APPLICATION_PORT || 8080;

export const mongoHost = process.env.MONGODB_HOST || "localhost";

export const mongoDefault = process.env.MONGODB_DEFAULT || "test";