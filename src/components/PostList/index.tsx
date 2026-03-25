import {postRepository} from "@/repositories/post";
import {PostCoverImage} from "@/components/PostCoverImage";
import {PostHeading} from "@/components/PostHeading";
import {formatDistanceToNow, formatDateTime} from "@/utils/format-datetime";

export async function PostsList() {
    const posts = await postRepository.findAll();
    return (
        <div className={'grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'}>
            {
                posts.map(post => {
                    const postLink = `/post/${post.slug}`

                    return (
                        <div className={'group flex flex-col gap-4'} key={post.id}>
                            <PostCoverImage
                                linkProps={{
                                    href: postLink
                                }}
                                imageProps={{
                                    alt:post.title,
                                    src:post.coverImageUrl,
                                    width:1200,
                                    height:720,
                                }}
                            />

                            <div className='flex flex-col gap-4 justify-center'>
                                <time
                                    className='text-slate-600 block text-sm/tight'
                                    dateTime={post.createdAt}
                                    title={formatDistanceToNow(post.createdAt)}
                                >
                                    {formatDateTime(post.createdAt)}
                                </time >

                                <PostHeading as='h2' url={postLink}>
                                    {post.title}
                                </PostHeading >

                                <p >{post.excerpt}</p >
                            </div >
                        </div>
                    )
                })
            }
        </div>
    )
}