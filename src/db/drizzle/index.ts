import { drizzle } from "drizzle-orm/better-sqlite3";
import { postTable } from "@/db/drizzle/schemas";
import { resolve } from "path";
import Database from "better-sqlite3";

const sqliteDbPath = resolve(process.cwd(), `../../../db.sqlite3`)
console.log(sqliteDbPath)
const sqliteDb = new Database(sqliteDbPath)

export const drizzleDB = drizzle(sqliteDb, {
  schema: {
    posts: postTable,
  },
  logger: true
})
