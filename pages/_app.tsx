import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { RiseProvider } from 'context/storeContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RiseProvider>
            <Component {...pageProps} />
        </RiseProvider>
    )
}

export default MyApp
