import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({score, children}) {
  return (
    <div className=' p-8 h-screen bg-gradient-to-b text-center text-light from-dark-blue to-dark-purple'>
      <Header score={score} />
      { children } 
    </div>
  )
}

export default Layout