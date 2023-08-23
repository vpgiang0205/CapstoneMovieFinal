import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_components/Navbar'
import Footer from './HomePage/Footer'

export default function HomeTemplate() {
    return (
        <>
            <Navbar />

            <Outlet />
        </>
    )
}

