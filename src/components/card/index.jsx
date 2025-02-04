import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Card } from 'react-bootstrap';
function CardComponent() {
    return (
        <Card className='tevas'style={{ width: '33%' }}>
                <Card.Title className='fs-2'>Kortelės Pavadinimas</Card.Title>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png" />
            <Card.Body className='d-flex flex-column slepti'>
                <Card.Text>
                    Keletas greitų pavyzdžių tekstų, kad papildytų kortelės pavadinimą ir sudarytų didžiąją dalį
                    kortelės turinio.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default CardComponent;