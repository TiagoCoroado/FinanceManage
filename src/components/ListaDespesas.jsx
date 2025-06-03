import { useState } from 'react'
import  NavBar  from './Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function ListaDespesas() {


  return (
    <>
    <NavBar />
      <h1>Lista de Despesas</h1>
    </>
  )
}

export default ListaDespesas
