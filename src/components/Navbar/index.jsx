'use client'
import { useEffect, useState } from 'react'
import NavbarItemMobile from './NavbarItemMobile'
import NavbarItem from './NavbarItem'
import useVisibility from '@hooks/useVisibility'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import logoWhite from '@assets/images/logo-white_64.png'
import Hamburguer from './Hamburguer'
import { configureNav } from '@lib/configureNav'
import Image from 'next/image'
export default function Navbar () {
  const SCROLL_POSITION_TRIGGER = 10
  const [transparentNavbar, setTransparentNavbar] = useState(true)
  const hamburguerButton = useVisibility()
  const currentRoute = usePathname()

  function isTransparent () {
    if (configureNav.includes(currentRoute)) return true
    return false
  }

  function handleScroll () {
    if (window.scrollY > SCROLL_POSITION_TRIGGER && isTransparent()) setTransparentNavbar(false)
    else setTransparentNavbar(true)
  }

  useEffect(() => {
    handleScroll()
    if (isTransparent()) window.addEventListener('scroll', handleScroll)
    else return window.removeEventListener('scroll', handleScroll)
  }, [currentRoute])

  return (
    <header
      className={`fixed z-30 h-navbar top-0 left-0 w-full    duration-300 ease-[cubic-bezier(.42,-0.01,.47,1)]  ${
        transparentNavbar ? 'bg-transparent' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <nav className='w-full h-full flex flex-col justify-center'>
        <div
          className={`fixed block md:hidden w-screen top-0 h-screen duration-300 bg-white ${
            hamburguerButton.isVisible ? 'left-0' : 'left-full '
          }`}
        >
          <ul className='w-full h-full flex flex-col justify-center items-center tracking-widest text-black'>
            <NavbarItemMobile
              link='/proyectos'
              linkName='PROYECTOS'
              onclick={() => hamburguerButton.toggle()}
            />
            <NavbarItemMobile
              link='/estudio'
              linkName='ESTUDIO'
              onclick={() => hamburguerButton.toggle()}
            />
            <NavbarItemMobile
              link='/contacto'
              linkName='CONTACTO'
              onclick={() => hamburguerButton.toggle()}
            />
          </ul>
        </div>
        <div
          className='flex w-full h-full  px-5  items-center justify-between gap-4 duration-200'
        >
          <Link href='/'>
            <Image
              src={logoWhite}
              alt='logotipo rafo alfaro'
              className='duration-200 w-6 lg:w-7 hover:brightness-75'
              priority
            />
          </Link>
          <div className='sm:hidden block '>
            <Hamburguer
              visbility={hamburguerButton.isVisible}
              trigger={hamburguerButton.toggle}
            />
          </div>

          <ul
            className={`hidden  justify-center items-center gap-10 h-full  duration-100 md:text-sm 2xl:text-[.8em]
                text-white tracking-widest lg:text-md font-bold sm:flex `}
          >
            <NavbarItem linkName='PROYECTOS' link='/proyectos' />
            <NavbarItem linkName='ESTUDIO' link='/estudio' />
            <NavbarItem linkName='CONTACTO' link='/contacto' />
          </ul>
        </div>
      </nav>
    </header>
  )
}
