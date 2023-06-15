import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Outlet } from 'react-router-dom'
// keep in mind all those issue you save here in youtube
// import { Outlet } from 'react-router'
const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
       <Outlet/>
      </Container>
    </main>
    <Footer/>
   <ToastContainer/>
    </>
  )
}

export default App
