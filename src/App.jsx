import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import DefaultLayout from './Component/layout/DefaultLayout'

function App() {
 return (
    <>
      <div>
        <BrowserRouter>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
          <Routes>
          <Route path="*" element={<DefaultLayout/>} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
