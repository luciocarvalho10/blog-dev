import {TPostSummary} from "@/models/post/TPostSummary";
import {TPostModel} from "@/models/post/TPostModel";

export class DTOPostSummary implements TPostSummary {
    title: string;
    createdAt: string;
    excerpt: string;

    constructor(post: TPostModel) {
        this.title = post.title;
        this.createdAt = post.createdAt;
        this.excerpt = post.excerpt;
    }
}