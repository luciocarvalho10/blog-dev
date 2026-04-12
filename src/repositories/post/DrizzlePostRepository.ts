import { IPostRepository } from '@/repositories/post/IPostRepository';
import { TPostModel } from '@/models/post/TPostModel';
import { drizzleDB } from '@/db/drizzle';

export class DrizzlePostRepository implements IPostRepository {
  async findAllPublic(): Promise<TPostModel[]>{
    return await drizzleDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    })
  }


  async findBySlugPublic(slug: string): Promise<TPostModel>{
    return {slug} as TPostModel
  }

  async findAll(): Promise<TPostModel[]>{
    return []
  }

  async findById(id: string): Promise<TPostModel>{
    return {id} as TPostModel
  }
}

(async () => {
  const repo = new DrizzlePostRepository()
  const posts = await repo.findAllPublic()
  posts.forEach(post => console.log(post, post.published))
})()
