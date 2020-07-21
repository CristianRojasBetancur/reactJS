import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <table>
            <tr className="cabeza">
              <th>Nombres</th> 
              <th>Apellidos</th> 
              <th>Correo</th> 
              <th>Celular</th> 
            </tr>
            <tr className="elem1">
              <td>Cristian</td>
              <td>Rojas Betancur</td>
              <td>criztian5600@gmail.com</td>
              <td>3192179166</td>
            </tr>
            <tr className="elem2">
              <td>Juan Camilo</td>
              <td>Mesa Correa</td>
              <td>juanmesa@inemjose.edu.co</td>
              <td>3007709910</td>
            </tr>
            <tr className="elem3">
              <td>Juan Mateo</td>
              <td>Jimenez Isaza</td>
              <td>juanateojizasa@gmail.com</td>
              <td>3017018205</td>
            </tr>
            <tr className="elem4">
              <td>Camilo</td>
              <td>Jerez Quiroz</td>
              <td>camilojerez04@gmail.com</td>
              <td>3007762056</td>
            </tr>
          </table>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
