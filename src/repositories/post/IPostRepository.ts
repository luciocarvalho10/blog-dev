import { TPostModel } from "@/models/post/TPostModel";

export interface IPostRepository {

  findAllPublic(): Promise<TPostModel[]>

  findBySlugPublic(slug: string): Promise<TPostModel>

  findById(id: string): Promise<TPostModel>

  findAll(): Promise<TPostModel[]>
}
