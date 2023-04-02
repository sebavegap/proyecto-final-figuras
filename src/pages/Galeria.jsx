import { useContext } from 'react';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import CardFigura from '../components/CardFigura';

import Context from '../Context';

const Galeria = () =>
{
    const { datosFiguras } = useContext(Context);

    return (
        <Container style={{ marginBlock: '3em' }}>
            <Row xs="1" md="2" lg="3" xl="3">
                {
                    datosFiguras[0].map((data) =>
                    {
                        return <CardFigura key={data.id} figura={data} />
                    })
                }
            </Row>
        </Container>
    );
}

export default Galeria;
