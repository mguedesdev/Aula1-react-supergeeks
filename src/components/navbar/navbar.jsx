import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./Navbar.css"


function Navbar_component(props) {
  return (
      <Navbar bg='dark' variant='dark' >
        <Navbar.Brand className="mx-3" >Web Sr.Batata</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => {props.setCurrentPage(1)}}>Sobre</Nav.Link>
          <Nav.Link onClick={() => {props.setCurrentPage(2)}}>Anotações</Nav.Link>
          <Nav.Link onClick={() => {props.setCurrentPage(3)}}>Blog</Nav.Link>
          <Nav.Link onClick={() => {props.setCurrentPage(4)}}>Notícias</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default Navbar_component