import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
  host: "localhost",
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};
