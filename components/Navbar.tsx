import React from 'react'
import { Inter } from '@next/font/google'
import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink'

const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {
  
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
  ];

  return (
    <nav className={[styles.menu, inter.className].join(' ')}>
      {menuItems.map(({text, href}) =>  
        <ActiveLink key={ text } text={ text } href={ href } />
      )}
    </nav>
  )
}

export default Navbar