import { TPostModel } from "@/models/post/post-models";
import { IPostRepository } from "@/repositories/post/post-repository";
import { resolve } from "path"
import { readFile } from "fs/promises";

const LOCAL_DIR = process.cwd();
const ROOT_DIR = resolve(LOCAL_DIR, '..', '..', '..');
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json')

export class PostRepository implements IPostRepository {
    private async readFromDisk() {
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
        const parsedJsonContent = JSON.parse(jsonContent);
        const {posts} = parsedJsonContent;
        return posts
    }

    async findAll(): Promise<TPostModel[]> {
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
