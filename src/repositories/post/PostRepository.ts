import { TPostModel } from '@/models/post/TPostModel';
import { IPostRepository } from '@/repositories/post/IPostRepository';

import { readFile } from 'fs/promises';
import { resolve } from 'path';

const pathFile = process.cwd()
// console.log('post', pathFile)
// const srcIndex = pathFile.lastIndexOf('src');
// const root = pathFile.slice(0,srcIndex)
const JSON_POSTS_FILE_PATH = resolve(pathFile + '/src/db/seed/posts.json');

const SIMULATE_WAIT_TIME_IN_MS = 0;

export class PostRepository implements IPostRepository {
 private async simulateWait() {
  if (SIMULATE_WAIT_TIME_IN_MS <= 0) return;

  await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_TIME_IN_MS));
 }

 private async readFromDisk() {
  const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
  const parsedJsonContent = JSON.parse(jsonContent);
  const { posts } = parsedJsonContent;

  return posts;
 }

 async findAll(): Promise<TPostModel[]> {
  await this.simulateWait();

  console.log('\n', 'findAll', '\n');

  return await this.readFromDisk();
 }

 async findAllPublic(): Promise<TPostModel[]> {
  await this.simulateWait();

  const posts = await this.readFromDisk();

  console.log('\n', 'findAllPublic', '\n');

  return posts.filter((post: TPostModel) => post.published);
 }

 async findById(id: string): Promise<TPostModel> {
  const posts = await this.findAllPublic();
  const post = posts.find(post => post.id === id);

  if (!post) throw new Error('Post não encontrado pelo ID!');

  return post;
 }

 async findBySlug(slug: string): Promise<TPostModel> {
  const posts = await this.findAllPublic();
  const post = posts.find(post => post.slug === slug);

  if (!post) throw new Error('Post não encontrado pelo slug');

  return post;
 }
}

export const postRepository: IPostRepository = new PostRepository();
