import { IPostRepository } from "@/repositories/post/IPostRepository";
import { PostRepository } from "@/repositories/post/PostRepository";

export const postRepository: IPostRepository = new PostRepository();
