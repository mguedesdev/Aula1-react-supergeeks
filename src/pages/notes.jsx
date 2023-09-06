import React, { useState } from 'react'
import { Container, Button, Modal, InputGroup, Form } from 'react-bootstrap';


function Notes() {
    const [show, setShow] = useState(false);
  return (
    <>
        <Container className="p-3 my-3 bg-light border rounded">
            <h1>Minhas Anotações</h1>
            <p>
                Use essa janela adicionar anotações, lembretes ou qualquer tipo de informação
            </p>
            <Button variant='success mt-4' onClick={() => setShow(true)}>Criar nova anotação</Button>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title >Nova Anotação</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <InputGroup className='mb-3' >
                        <InputGroup.Text>Data</InputGroup.Text>
                        <Form.Control
                            aria-describedby="basic-addon1"
                            type='date'
                            id='inputDate'
                            />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Título</InputGroup.Text>
                        <Form.Control id='inputTitle'/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Descrição</InputGroup.Text>
                        <Form.Control id='inputTitle' as='textarea'/>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setShow(false)}}>Cancelar</Button>
                    <Button variant="primary">Adicionar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    </>
  )
}

export default Notes