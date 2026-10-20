import "dotenv/config";
import { readFileSync } from "node:fs";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.js";

const databaseUrl = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL) : null;

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || databaseUrl?.hostname,
  port: Number(process.env.DATABASE_PORT || databaseUrl?.port || 3306),
  user: process.env.DATABASE_USER || decodeURIComponent(databaseUrl?.username || ""),
  password: process.env.DATABASE_PASSWORD || decodeURIComponent(databaseUrl?.password || ""),
  database: process.env.DATABASE_NAME || databaseUrl?.pathname.slice(1),
  ...(process.env.DATABASE_SSL === "true" ? { ssl: {
    rejectUnauthorized: true,
    ...(process.env.DATABASE_SSL_CA_FILE ? { ca: readFileSync(process.env.DATABASE_SSL_CA_FILE, "utf8") } : {})
  } } : {}),
  connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export { prisma };
