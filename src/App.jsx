

import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header'
import Footer from './Shared/Footer'

function App() {


  return (
    <>
      <h3 className='text-4xl text-red-900'> Thisb is </h3>
      <Header></Header>
      <Outlet  ></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
