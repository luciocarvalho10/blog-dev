import { TPostModel } from "@/models/post/TPostModel";

export interface IPostRepository {
    findAll(): Promise<TPostModel[]>
    findById(id: string): Promise<TPostModel>
}