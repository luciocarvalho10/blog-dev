import {PostCoverImage} from "@/components/PostCoverImage";
import {PostHeading} from "@/components/PostHeading";

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

            <div className='flex flex-col gap-4 justify-center'>
                <time
                    className='text-slate-600 block text-sm/tight'
                    dateTime='2026-03-19'
                >
                    Dev Blog - 19/03/2026 20:15
                </time >

                <PostHeading
                    as='h1'
                    url={postLink}
                >
                    Aliquam assumenda consectetur dicta
                    ducimus ea earum error fuga harum laudantium nemo, officia, quidem quod quos repudiandae sint
                    tempora voluptas voluptates, voluptatibus.
                </PostHeading >

                <p >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda consectetur dicta
                    ducimus ea earum error fuga harum laudantium nemo, officia, quidem quod quos repudiandae sint
                    tempora voluptas voluptates, voluptatibus.
                </p >
            </div >
        </section >
    );
}
