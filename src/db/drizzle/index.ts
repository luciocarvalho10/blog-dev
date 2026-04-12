import { drizzle } from "drizzle-orm/better-sqlite3";
import { postTable } from "@/db/drizzle/schemas";
import { resolve } from "path";
import Database from "better-sqlite3";

const pathFile = process.cwd()
// local test
// const srcIndex = pathFile.lastIndexOf('src');
// const root = pathFile.slice(0,srcIndex)
// const sqliteDbPath = resolve(root + 'db.sqlite3')
// console.log('\n', new Date(), '\n', sqliteDbPath)

//production
const sqliteDbPath = resolve(pathFile + '/db.sqlite3')
const sqliteDb = new Database(sqliteDbPath)

export const drizzleDB = drizzle(sqliteDb, {
  schema: {
    posts: postTable,
  },
  logger: false
})
