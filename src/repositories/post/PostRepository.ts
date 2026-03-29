import { TPostModel } from "@/models/post/TPostModel";
import { IPostRepository } from "@/repositories/post/IPostRepository";
import { resolve } from "path"
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json')

const SIMULATE_WAIT_TIME_IN_MS = 5000;

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

    async findAllPublic(): Promise<TPostModel[]> {
        await this.simulateWait()

        const posts = await this.readFromDisk()

        return posts.filter((post: TPostModel) => post.published)
    }

    async findById(id: string): Promise<TPostModel> {
        const posts = await this.findAllPublic()
        const post = posts.find(post => post.id === id)

        if(!post) throw new Error('Post não encontrado pelo ID!')

        return post
    }

    async findBySlug(slug: string): Promise<TPostModel> {
        const posts = await this.findAllPublic()
        const post = posts.find(post => post.slug === slug)

        if(!post) throw new Error('Post não encontrado pelo slug')

        return post
    }
}

export const postRepository: IPostRepository = new PostRepository();
