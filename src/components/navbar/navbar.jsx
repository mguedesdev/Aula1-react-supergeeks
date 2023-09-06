import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./Navbar.css"


function Navbar_component() {
  return (
      <Navbar bg='dark' variant='dark' >
        <Navbar.Brand className="mx-3" >Web Sr.Batata</Navbar.Brand>
        <Nav>
          <Nav.Link>Sobre</Nav.Link>
          <Nav.Link>Anotações</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
          <Nav.Link>Notícias</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default Navbar_component