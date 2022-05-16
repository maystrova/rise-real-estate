import React from 'react'
import Head from 'next/head'
import style from 'styles/page.module.scss'

interface PageProps {
    children:
        | React.ReactElement
        | React.ReactComponentElement<any>
        | string
        | React.ReactNode
    title?: string
}

const Page = ({ children, title = 'Rise Real Estate' }: PageProps) => {
    return (
        <div className={style.container}>
            <Head>
                <title>{title}</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                />
            </Head>
            {children}
        </div>
    )
}

export default Page
