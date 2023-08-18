import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

export default function HomeTemplate() {
    return (
        <>

            <Navbar />
            <div className='container'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
