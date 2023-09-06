import React from 'react'
import { Container } from 'react-bootstrap';


function Notes() {
  return (
    <>
        <Container className="p-3 my-3 bg-light border">
            <h1>Minhas Anotações</h1>
            <p>
                Use essa janela adicionar anotações, lembretes ou qualquer tipo de informação
            </p>
        </Container>
    </>
  )
}

export default Notes