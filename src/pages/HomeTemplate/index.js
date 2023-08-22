import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

export default function HomeTemplate() {
    return (
        <>
            <Navbar />

            <section className='container'>
                <Outlet />
            </section>

            <section id='footer'>
                <Footer />
            </section>
        </>
    )
}

