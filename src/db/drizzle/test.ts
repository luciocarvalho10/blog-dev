import { drizzleDB } from ".";
import { postTable } from "@/db/drizzle/schemas";

(async () => {
  const posts = await drizzleDB.select().from(postTable)

  console.log(posts)
})()
