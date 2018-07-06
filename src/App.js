import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div className='wrapper'>
          <SayFullName name='A1' surname='B1' link='C1' />
          <SayFullName name='A2' surname='B2' link='C2' />
          <SayFullName name='A3' surname='B3' link='C3' />
        </div>
    );
  }
}

function SayFullName (props) {
  return(
    <div>
      <h1>Моё имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}> Ссылка на мой профиль</a>
    </div>
  )
}





export default App;
