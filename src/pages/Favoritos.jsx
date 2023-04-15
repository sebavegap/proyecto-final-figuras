import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

//import de lo necesario para usar el contexto
import { useContext } from 'react'
import Context from '../Context'

const Favoritos = () => {

  //revisamos si estamos consumiendo el contexto
  const { datosFavoritos } = useContext(Context)
  console.log(datosFavoritos)

  return (
    <Container style={{ marginBlock: '4em' }} className='text-white'>
            <Row xs="1" md="2" lg="3" xl="3">
        <Col>
        <h1>Favoritos</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Favoritos