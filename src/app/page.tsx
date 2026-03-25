import {SpinLoader} from "@/components/SpinLoader";
import {Suspense} from "react";
import {PostsList} from "@/components/PostList";
import {Container} from "@/components/Container";
import {Header} from "@/components/Header";
import {PostFeatured} from "@/components/PostFeatured";

export default function Home() {
    return (
        <Container >
            <Header />

            <PostFeatured />

            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense >

            <footer >
                <p className="text-6xl font-bold text-center py-8">FOOTER</p >
            </footer >
        </Container >
    );
}
