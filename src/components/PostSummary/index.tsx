import {PostHeading} from "@/components/PostHeading";
import {formatDistanceToNow, formatDateTime} from "@/utils/format-datetime";
import {TPostSummary} from "@/dto/post/TPostSummary";

type PostSummaryProps = {
    postLink: string;
    postHeadingType: "h1" | "h2";
    post: TPostSummary;
};

export async function PostSummary({postLink, postHeadingType, post}: PostSummaryProps) {

    return (
        <div className='flex flex-col gap-4 justify-center'>
            <time
                className='text-slate-600 block text-sm/tight'
                dateTime={post.createdAt}
                title={formatDistanceToNow(post.createdAt)}
            >
                {formatDateTime(post.createdAt)}
            </time >

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