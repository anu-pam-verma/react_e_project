import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from 'react-dom/client'
import Header from './Component/Header'
import Search from './Component/Search'
import Footer from './Component/Footer'
import Body from './Component/Body'


const AppLayout=()=>{
  return(
  <>
   <Header/>
   <Search/>
   <Body/>
   <Footer/>
  </>
  )
}

createRoot(document.getElementById('root')).render(
    <AppLayout />
)
