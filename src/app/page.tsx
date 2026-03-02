import {SpinLoader} from "@/components/SpinLoader";
import {Suspense} from "react";
import {PostsList} from "@/components/PostList";


export default function Home() {
    return (
        <div className="text-slate-900 bg-slate-100 min-h-screen">
            <header >
                <h1 className="text-6xl font-bold text-center py-8">
                    HEADER
                </h1 >
            </header >
            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>

            <footer >
                <p className="text-6xl font-bold text-center py-8">FOOTER</p >
            </footer >
        </div >
    );
}
