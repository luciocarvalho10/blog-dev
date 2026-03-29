import {PostCoverImage} from "@/components/PostCoverImage";
import {PostSummary} from "@/components/PostSummary";
import {TPostSummary} from "@/models/post/TPostSummary";
import {DTOPostSummary} from "@/dto/post/DTOPostSummary";
import {findAllPublicPostsCached} from "@/lib/post/queries";

export async function PostsList() {
    const posts = await findAllPublicPostsCached();

    return (
        <div className={'grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 md:grid-cols-3'}>
            {
                posts.slice(1).map(post => {
                    const postLink = `/post/${post.slug}`
                    const postToSummary: TPostSummary = new DTOPostSummary(post)

                    return (
                        <div
                            className={'group flex flex-col gap-4'}
                            key={post.id}
                        >
                            <PostCoverImage
                                linkProps={{
                                    href: postLink
                                }}
                                imageProps={{
                                    alt: post.title,
                                    src: post.coverImageUrl,
                                    width: 1200,
                                    height: 720,
                                    loading: 'eager',
                                }}
                            />

                            <PostSummary
                                postLink={postLink}
                                postHeadingType='h2'
                                post={postToSummary}
                            />

                        </div >
                    )
                })
            }
        </div >
    )
}