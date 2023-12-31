import dotenv from "dotenv";
import * as process from "process";

dotenv.config({ path: ".env" });

/**
 |----------------------------------------------------------------------------------------|
 App Configuration
 |----------------------------------------------------------------------------------------|
 */
export const ENVIRONMENT = process.env.NODE_ENV;
export const PORT = process.env.PORT;

/**
 |----------------------------------------------------------------------------------------|
 Authentication Configuration
 |----------------------------------------------------------------------------------------|
 */

export const SESSION_SECRET = process.env.JWT_SECRET || "";

/**
 * Use only if you include jwt
 */
// if (!SESSION_SECRET) process.exit(1)

/**
 |----------------------------------------------------------------------------------------|
 Databases Configuration
 |----------------------------------------------------------------------------------------|
 */

/**
 *  MySQL
 */
export const CONFIG_MYSQL = {
  host: process.env.DB_HOST_MYSQL,
  user: process.env.DB_USER_MYSQL,
  password: process.env.DB_PASSWORD_MYSQL,
  database: process.env.DATABASE_MYSQL,
  port: process.env.DB_PORT_MYSQL,
};
