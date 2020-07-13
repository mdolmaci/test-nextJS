import Nav from './Nav'
import Head from 'next/head'

function Layout ({children}) {
    return <div>
        <Nav />
        <Head>
            <title>Web Sitem</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
            {children}
        </main>
        <footer>
            <p>designed by MD</p>
        </footer>
    </div>
}
export default Layout