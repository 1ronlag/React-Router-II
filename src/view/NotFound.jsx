import React from 'react'
import psyduck from '../assets/img/psyduck.png'
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container id='not' className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe 😫</h1>
      <img className='notFound' src={psyduck} alt="pato amarillo" />
    </Container>
  )
}

export default NotFound