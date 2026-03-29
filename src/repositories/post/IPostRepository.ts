import { TPostModel } from "@/models/post/TPostModel";

export interface IPostRepository {
    findAllPublic(): Promise<TPostModel[]>
    findById(id: string): Promise<TPostModel>
    findBySlug(slug: string): Promise<TPostModel>
}