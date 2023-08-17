import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function NavbarItemMobile ({ linkName, link, onclick }) {
  const [isActive, setIsActive] = useState(false)
  const route = usePathname()
  useEffect(() => {
    if (route === link) setIsActive(true)
  }, [])
  return (
    <li className='w-full p-10 text-center'>
      <Link
        href={link}
        className={`${
          isActive ? 'font-bold' : 'hover:underline  block w-full h-full'
        }`}
        onClick={onclick}
      >
        {linkName}
      </Link>
    </li>
  )
}
