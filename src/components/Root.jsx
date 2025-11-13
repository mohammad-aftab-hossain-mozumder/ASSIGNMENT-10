import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from './Footer'

const Root = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading" || navigation.state === "submitting";
  return (
    <div className='max-w-[1260px] mx-auto'>
      <Navbar></Navbar>
      {
        isLoading? <span className="loading loading-spinner text-success"></span> :<Outlet></Outlet>
      }
      
      <Footer></Footer>
    </div>
  )
}

export default Root