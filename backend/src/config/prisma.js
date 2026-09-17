import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.js";

const databaseUrl = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL) : null;

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || databaseUrl?.hostname,
  port: Number(process.env.DATABASE_PORT || databaseUrl?.port || 3306),
  user: process.env.DATABASE_USER || decodeURIComponent(databaseUrl?.username || ""),
  password: process.env.DATABASE_PASSWORD || decodeURIComponent(databaseUrl?.password || ""),
  database: process.env.DATABASE_NAME || databaseUrl?.pathname.slice(1),
  connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export { prisma };
