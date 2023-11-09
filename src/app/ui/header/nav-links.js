'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink(link) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  const linkClassName = isActive ? 'active' : '';
  return (
    <>
        <Link
            href={link.href}
            className={linkClassName}
        >
            <p>{link.name}</p>
        </Link>
    </>
  )
}
