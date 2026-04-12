'use client'

import ErrorMessage from '@/components/ErrorMessage'
import {useEffect} from "react";

type RootErrorProps = {
    error: Error;
    reset: () => void;
}

export default function RootErrorPage({error}: RootErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    const pageTitle = document.querySelector('title')?.title || 'Error';
    const content = 'Ocorreu um erro inesperado. Tente novamente mais tarde!'

    return (
        <ErrorMessage
            pageTitle={pageTitle}
            contentTitle={'501'}
            content={content}
        />
    )
}
