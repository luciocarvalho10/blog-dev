import { IPostRepository } from "@/repositories/post/IPostRepository";
import { DrizzlePostRepository } from '@/repositories/post/DrizzlePostRepository';

export const postRepository: IPostRepository = new DrizzlePostRepository();
