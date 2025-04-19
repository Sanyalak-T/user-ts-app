import React from 'react'
import { Outlet, Link } from "react-router";
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="pl-20 pt-4 pr-20 max-w-full mx-auto w-full">
                <Outlet />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Layout