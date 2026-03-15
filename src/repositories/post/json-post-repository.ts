import { TPostModel } from "@/models/post/post-models";
import { IPostRepository } from "@/repositories/post/post-repository";
import { resolve } from "path"
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json')

const SIMULATE_WAIT_TIME_IN_MS = 0;
export class PostRepository implements IPostRepository {
    private async simulateWait() {
        if (SIMULATE_WAIT_TIME_IN_MS <= 0) return;

        await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_TIME_IN_MS));
    }

    private async readFromDisk() {
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
        const parsedJsonContent = JSON.parse(jsonContent);
        const {posts} = parsedJsonContent;
        return posts
    }

    async findAll(): Promise<TPostModel[]> {
        await this.simulateWait()
        return await this.readFromDisk()
    }

    async findById(id: string): Promise<TPostModel> {
        const posts = await this.findAll()
        const post = posts.find(post => post.id === id)

        if(!post) throw new Error('Post não encontrado')

        return post
    }
}

export const postRepository: IPostRepository = new PostRepository();
