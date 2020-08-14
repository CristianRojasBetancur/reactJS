import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Head from './components/Head'
import './css/App.css'
import Footer from './components/footer'
import datosPersonas from './data/datos.json'
import Persona from './components/Persona.js'
import Nuevo from './components/Nuevo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datosPersonas
    }
  }

  render() {
    return (
      <>
        <Head />
        <div>
          <img className="imagen" src="https://cdn.discordapp.com/attachments/634428293877071882/742764614147637368/unknown.png" alt="casa"></img>
        </div>
        <Container>
          <Persona datosPersonas={this.state.datosPersonas} />
          <Nuevo/>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
