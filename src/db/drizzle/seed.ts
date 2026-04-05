// import { drizzleDB } from ".";
// import { PostsTableInsertMode, postTable } from '@/db/drizzle/schemas';
//
// import { PostRepository } from "@/repositories/post/PostRepository";
//
// (async () => {
//   const posts = await drizzleDB.select().from(postTable)
//   posts.forEach(p => console.log(p.slug))
//
//   const postRepo = new PostRepository()
//   const postsRepo = await postRepo.findAll()
//
//   try {
//     await drizzleDB.delete(postTable)
//     await drizzleDB.insert(postTable).values(postsRepo)
//   } catch (error) {
//     console.log( '\nOcorreu um erro...\n', error, '\n')
//   }
// })()
