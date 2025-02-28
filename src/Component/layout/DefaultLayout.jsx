import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header.jsx'
import Content from '../Content.jsx'
import Footer from '../Footer/Footer.jsx'

function DefaultLayout() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default DefaultLayout
