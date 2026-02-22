import { TPostModel } from "@/models/post/post-models";

export interface IPostRepository {
    findAll(): Promise<TPostModel[]>
    findById(id: string): Promise<TPostModel>
}