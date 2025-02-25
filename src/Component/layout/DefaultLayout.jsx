import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header.jsx'
import Content from '../Content.jsx'

function DefaultLayout() {
  return (
    <div>
      <Header/>
      <Content />
    </div>
  )
}

export default DefaultLayout
