import React from 'react'
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function Head() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">CR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Mensualidad</Nav.Link>
                            <Nav.Link href="#link">Contactanos</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-info">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }

export default Head