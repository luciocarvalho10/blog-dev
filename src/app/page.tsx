import {SpinLoader} from "@/components/SpinLoader";
import {Suspense} from "react";
import {PostsList} from "@/components/PostList";
import {PostFeatured} from "@/components/PostFeatured";

export default function Home() {
    return (
        <>
            <Suspense fallback={<SpinLoader />}>
                <PostFeatured />
            </Suspense >

            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense >
        </>
    );
}
