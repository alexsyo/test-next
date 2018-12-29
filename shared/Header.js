import Link from 'next/link'

const Header = () => (
  <div>
    Header
    <ul>
      <li>
        <Link href="/">home</Link>  
      </li>
      <li>
        <Link href="/stuff">stuff</Link>  
      </li>  
    </ul>
  </div>
);

export default Header;