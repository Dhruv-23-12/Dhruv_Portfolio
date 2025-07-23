import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutContact from './Pages/AboutContact'
import ProjectsPage from './Pages/ProjectsPage'
import ContactPage from './Pages/ContactPage'
import Navbar from './Common/NavBar'
import FooterSection from './Common/FooterSection'
import BackgroundAnimation from './Common/BackgroundAnimation'


function Layout() {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  )
}

  const AllRouter = createBrowserRouter([
    {
     path: '/',
     element: <Layout />,  // ✅ Now your layout wraps all pages!
     children: [
       {
         index: true, // same as path: ''
         element: <HomePage />
       },
       {
         path: 'about',
         element: <AboutContact />
       },
       {
         path: 'projects',
         element: <ProjectsPage />
       },
       {
         path: 'contact',
         element: <ContactPage />
       }
     ]
   }
 ])


createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={AllRouter} />
  </StrictMode>,
)
