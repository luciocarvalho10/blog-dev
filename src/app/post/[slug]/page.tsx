import {findPostBySlugCached} from "@/lib/post/queries";
import {Metadata} from "next";

type PostSlugPageProps = {
    params: Promise<{ slug: string}>
}

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
    const paramsResolved = await params;
    const { slug } = paramsResolved;

    const post = await findPostBySlugCached(slug);

    return {
        title: post.title,
        description: post.excerpt,
    }
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const paramsResolved = await params;
    const { slug } = paramsResolved;

   const post = await findPostBySlugCached(slug);

    return (
        <div >
            <p >{post.title}</p >
        </div >
    )
}