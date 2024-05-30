import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./../components/Navbar.jsx";

export default function Layout() {
  return (
    <>
        <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}
