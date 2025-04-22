import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
        <main>

        <Outlet>
          
        </Outlet>
        </main>
        <Footer />
    </div>
  )
}
