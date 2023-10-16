import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import logo from './dojo-logo.png'
export const  NavBar = () => {
  return(
    <nav>
      <Image src={logo} alt="Dojo Help Desk Logo" width={70} quality={100} placeholder='blur'/>
    <h1>Dojo Helpdesk</h1>
    <Link href='/'>Dashboard</Link>
    <Link href='/tickets'>Tickets</Link>
  </nav>
   )
  }
export default NavBar