import {PostHeading} from "@/components/PostHeading";
import {TPostSummary} from "@/models/post/TPostSummary";
import {PostDate} from "@/components/PostDate";

type PostSummaryProps = {
    postLink: string;
    postHeadingType: "h1" | "h2";
    post: TPostSummary;
};

export async function PostSummary({postLink, postHeadingType, post}: PostSummaryProps) {

    return (
        <div className='flex flex-col gap-4 justify-center'>
            <PostDate datetime={post.createdAt} />

            <PostHeading
                as={postHeadingType}
                url={postLink}
            >
                {post.title}
            </PostHeading >

            <p >{post.excerpt}</p >
        </div >
    )
}