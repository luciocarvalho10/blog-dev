import { IPostRepository } from "@/repositories/post/post-repository";
import { PostRepository } from "@/repositories/post/json-post-repository";

export const postRepository: IPostRepository = new PostRepository();
