import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NavbarItem ({ linkName, link }) {
  const [isActive, setIsActive] = useState(false)
  const route = usePathname()

  useEffect(() => {
    if (route === link) setIsActive(true)
    else setIsActive(false)
  }, [route])

  return (
    <li className='relative     h-full'>
      <Link
        href={`${link}`}
        className={`${
          isActive
            ? ` w-full   h-full after:animate-underlineNavItem after:absolute flex justify-center items-center after:block after:rounded-full 
        after:left-0 after:bottom-5  text-[.65em]  md:text-[0.85em] after:ease-[cubic-bezier(.42,-0.01,.47,1)] after:duration-200  after:h-0.5 after:bg-white`
            : `flex justify-center items-center  h-full w-full text-[.65em] 
              md:text-[0.85em]  hover:brightness-75 after:ease-[cubic-bezier(.42,-0.01,.47,1)] after:duration-200`
        }`}
      >
        {linkName}
      </Link>
    </li>
  )
}
