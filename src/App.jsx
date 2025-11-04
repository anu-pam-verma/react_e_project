import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from 'react-dom/client'
import Header from './Component/Header'
import Search from './Component/Search'
import Footer from './Component/Footer'
import Body from './Component/Body'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'


const AppLayout=()=>{
  return(
  <>
   <Header/>
   <Search/>
   {/* <Body/> */}
   <Outlet/>
   <Footer/>
  </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      }
    ]
  },
  {
    errorElement:<Error/>
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
