import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_components/Navbar'

export default function HomeTemplate() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

