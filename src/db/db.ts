import { env } from "cloudflare:workers";
import { createDb, type Database } from "rwsdk/db";
import { type migrations } from "@/db/migrations";

export type AppDatabase = Database<typeof migrations>;
export type Tow = AppDatabase["tows"];

export const db = createDb<AppDatabase>(
  env.APP_DURABLE_OBJECT,
  "tow-database"
);
