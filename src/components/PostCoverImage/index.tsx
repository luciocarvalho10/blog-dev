import Link from "next/link";
import Image from "next/image";
import {ComponentProps} from "react";

type PostCoverImageProps = {
    imageProps: ComponentProps<typeof Image>;
    linkProps: ComponentProps<typeof Link>;
}

export function PostCoverImage({imageProps, linkProps}: PostCoverImageProps) {
    return (
        <Link
            {...linkProps}
            className={'w-full ' +
                'h-full ' +
                'overflow-hidden ' +
                'rounded-xl ' +
                linkProps.className
            }
        >
            <Image
                {...imageProps}
                className={'w-full ' +
                    'h-full ' +
                    'object-cover ' +
                    'object-center ' +
                    'group-hover:scale-105 ' +
                    'transition ' +
                    imageProps.className
                }
                alt={imageProps.alt}
            />
        </Link >
    );
}
