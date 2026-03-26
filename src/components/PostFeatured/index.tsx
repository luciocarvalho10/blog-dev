import {PostCoverImage} from "@/components/PostCoverImage";
import {PostSummary} from "@/components/PostSummary";

export function PostFeatured() {
    const slug = 'post-featured'
    const postLink = `/post/${slug}`

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">

            <PostCoverImage
                linkProps={{
                    href: postLink,
                }}
                imageProps={{
                    alt:'Título Post',
                    src:'/images/bryen_0.png',
                    width:1200,
                    height:720,
                    priority:true,
                }}
            />

            <PostSummary
                postLink={postLink}
                postHeadingType='h2'
                post={{
                    title: 'Crescer faz parte da vida.',
                    createdAt: '2026-03-19',
                    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda consectetur dicta ducimus ea earum error fuga harum laudantium nemo, officia, quidem quod quos repudiandae sint tempora voluptas voluptates, voluptatibus.',
                }}
            />

        </section >
    );
}
