import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar_component() {
  return (
      <Navbar bg='dark' variant='dark' >
        <Navbar.Brand className="mx-3" >Web Sr.Batata</Navbar.Brand>
        <Nav>
          <Link to ="/About" className='nav-link'>Sobre</Link>
          <Link to ="/Notes" className='nav-link'> Anotações</Link>
          <Link to ="/Blog" className='nav-link'>Blog</Link>
          <Link to ="/News" className='nav-link'>Notícias</Link>
        </Nav>
      </Navbar>
  )
}

export default Navbar_component