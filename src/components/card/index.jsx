import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
function CardComponent() {
     const [fullscreen, setFullscreen] = useState(true);
        const [show, setShow] = useState(false);
        const [matomas, keisti] = useState(true)
    
        function handleShow(breakpoint) {
            setFullscreen(breakpoint);
            setShow(true);
        }

    return (
        <>
        <Card className='tevas' >
            <Card.Title className='fs-2'>Kortelės Pavadinimas</Card.Title>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Lightning_McQueen.png/220px-Lightning_McQueen.png" />
            <Card.Body className='d-flex flex-column slepti'>
                <Button className="me-2 mb-2" onClick={() => handleShow(true)}>
                        Apžiurėti                    </Button>
            </Card.Body>
            <Card.Footer className='text-muted'>2023-10-05</Card.Footer>
        </Card>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Mano Produktas</Modal.Title>
                </Modal.Header>
                
                <Card.Text>
                    Keletas greitų pavyzdžių tekstų, kad papildytų kortelės pavadinimą ir sudarytų didžiąją dalį
                    kortelės turinio.
                </Card.Text>
                <Modal.Body></Modal.Body>
            </Modal>
        </>
    )
}
export default CardComponent;