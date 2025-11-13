import './App.css'
import { createRoot } from 'react-dom/client'
import Header from './Component/Header'
import Search from './Component/Search'
import Footer from './Component/Footer'
import Body from './Component/Body'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
// import About from './Component/About'
// import Contact from './Component/Contact'
import { lazy, Suspense } from 'react'
import Details from './Component/Details'
const About  = lazy(()=>import('./Component/About'))
const Contact = lazy(()=>import('./Component/Contact'))

const AppLayout=()=>{
  return(
  <>
   <Header/>
   <Search/>
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
        element:<Suspense fallback={<div>Loading........</div>}><About/></Suspense>
      },
      {
        path:'/Contact',
        element:<Contact/>
      },
      {
        path:'details/:id',
        element:<Details/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
