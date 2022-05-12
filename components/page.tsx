import React from 'react'
import Head from 'next/head'

interface PageProps {
    children:
        | React.ReactChildren
        | React.ReactComponentElement<any>
        | string
        | React.ReactNode
    title?: string
}

const Page = ({ children, title }: PageProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                />
            </Head>
            {children}
        </>
    )
}

export default Page
