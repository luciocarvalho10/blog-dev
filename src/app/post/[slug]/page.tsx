import {findPostBySlugCached} from "@/lib/post/queries";
import {Metadata} from "next";
import {Suspense} from "react";
import {SpinLoader} from "@/components/SpinLoader";
import {SinglePost} from "@/components/SinglePost";

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

    return (
        <Suspense fallback={<SpinLoader className={'min-h-20 mb-16'} />}>
            <SinglePost slug={slug} />
        </Suspense >
    )
}