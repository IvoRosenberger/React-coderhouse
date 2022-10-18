import React from 'react'
import NavBar from '../components/NavBar'
import {Outlet} from 'react-router-dom'
function Layout({carrito}) {
    return (
        <>
            <NavBar carrito={carrito}/>  
            <Outlet/>
        </>
    )
}
export default Layout