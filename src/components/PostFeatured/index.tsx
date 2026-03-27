import {PostCoverImage} from "@/components/PostCoverImage";
import {PostSummary} from "@/components/PostSummary";
import {DTOPostSummary} from "@/dto/post/DTOPostSummary";
import {findAllPublicPosts} from "@/lib/post/queries";

export async function PostFeatured() {
    const posts = await findAllPublicPosts();
    const post = posts[0];
    const postLink = `/post/${post.slug}`
    const postToSummary = new DTOPostSummary(post);

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">

            <PostCoverImage
                linkProps={{
                    href: postLink,
                }}
                imageProps={{
                    alt:post.title,
                    src:post.coverImageUrl,
                    width:1200,
                    height:720,
                    priority:true,
                    loading:'eager',
                }}
            />

            <PostSummary
                postLink={postLink}
                postHeadingType='h2'
                post={postToSummary}
            />

        </section >
    );
}
