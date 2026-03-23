import Link from "next/link";
import {ReactNode} from "react";

type PostHeadingProps = {
    children: ReactNode;
    url: string;
    as?: 'h1' | 'h2' //| 'h3' | 'h4' | 'h5' | 'h6';
}
export function PostHeading({ children, url, as: Tag = 'h2' }: PostHeadingProps) {

    const headClasses: { h1: string; h2: string } = {
        h1: 'text-2xl/tight sm:text-4xl ',
        h2: 'text-xl/tight sm:text-2xl ',
        //h3: 'text-lg/tight font-semibold sm:text-xl',
        //h4: 'text-base/tight font-medium sm:text-lg',
        //h5: 'text-sm/tight font-normal sm:text-base',
        //h6: 'text-xs/tight font-normal sm:text-sm',
    }

    const commonClasses = 'font-extrabold '
    return (
        <Tag className= {headClasses[Tag] + commonClasses}>
            <Link href={url}>{children}</Link >
        </Tag >
    );
}
