import React, { Component } from 'react'
import { Button, Accordion, Card, Table } from 'react-bootstrap'

class Persona extends Component {
    render() {
        return (
            <>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="success" eventKey="0" className="botonCalcular">
                                Calcular
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Edad</th>
                                        <th>Genero</th>
                                        <th>Total a pagar</th>
                                        <th>Fecha de mensualidad</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                {this.props.datosPersonas.map(data => <tbody key={data.idPersona}>
                                    
                                    <tr>
                                        <td> {data.nombre} </td>
                                        <td>{data.edad}</td>
                                        <td>{data.genero}</td>
                                        <td> {data.totalPagar}</td>
                                        <td>{data.fechaDeMensualidad} </td>
                                        <td><p className="linkVer">Ver</p></td>
                                    </tr>
                                </tbody>)}
                            </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </>
        )
    }
}

export default Persona