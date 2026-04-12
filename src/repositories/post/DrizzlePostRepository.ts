import { IPostRepository } from '@/repositories/post/IPostRepository';
import { TPostModel } from '@/models/post/TPostModel';
import { drizzleDB } from '@/db/drizzle';

export class DrizzlePostRepository implements IPostRepository {

  async findAllPublic(): Promise<TPostModel[]> {
    console.log('\n', 'D findAllPublic', '\n');

    return await drizzleDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
  }

  async findBySlugPublic(slug: string): Promise<TPostModel> {
    console.log('\n', 'D findBySlugPublic', '\n');

    const post =  await drizzleDB.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado pelo slug');

    return post;
  }

  async findAll(): Promise<TPostModel[]> {
    console.log('\n', 'D findAll', '\n');

    return await drizzleDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    })
  }

  async findById(id: string): Promise<TPostModel> {
    console.log('\n', 'D findById', '\n');

    const post =  await drizzleDB.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id)
    });

    if (!post) throw new Error('Post não encontrado pelo id');

    return post;
  }
}


// (async () => {
  // const repo = new DrizzlePostRepository();
  // const posts = await repo.findAllPublic();
  // const posts = await repo.findAll();
  // posts.forEach(post => console.log(post.id, post.published));
  // console.log(await repo.findBySlugPublic('çfjkgafkçbvaçfvjnç'))
  // console.log(await repo.findById('adfsdfgsgfsgs'))
// })()
