import Link from 'next/link'

function Nav() {
    return <nav>
        <Link href="/index">
            <a>Ana Sayfa</a>
        </Link>
        <Link href="/about">
            <a>Hakkımda</a>
        </Link>
    </nav> 

  }
  
  export default Nav