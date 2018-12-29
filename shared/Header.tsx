import React from 'react';
import Link from 'next/link'

type Props = {
  readonly a?: string,
}

const Header = ({ a = "test" }: Props) => (
  <div>
    Header
    <ul>
      <li>
        <Link href="/">home</Link>  
      </li>
      <li>
        {a + 3 + "3"}
        <Link href="/stuff">stuff</Link>  
      </li>  
    </ul>
  </div>
);

export default Header;