import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
function MyCard() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [matomas, keisti] = useState(true)

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <Card border={matomas ? `success` : `danger`} style={{ width: '18rem' }}>

                <h1>Aprasimas</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores culpa est fugiat delectus quaerat recusandae. Delectus laboriosam quidem pariatur! Doloribus deserunt non doloremque earum quae omnis eligendi! Nisi, eius.
                </p>
                <p>Ikelimo data</p>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>2023-10-05</span>
                <div className=" d-flex  justify-content-center">

                <div className="row w-75 " >
                    <Button className="me-2 mb-2" onClick={() => handleShow(true)}>
                        Redaguoti
                    </Button>

                    <Button className={`me-2 mb-2 col ${matomas ? `btn-success` : ` btn-warning`}`} onClick={() => keisti(!matomas)}>
                        {matomas ? 'Slėpti skelbima' : 'Rodyti Skelbimą'}
                    </Button>
                    <Button className="me-2 mb-2  btn-danger col" onClick={() => setShow(false)}>
                        Ištrinti
                    </Button>
                </div>
                </div>
            </Card>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Mano Produktas</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
            </Modal>
        </>
    );
}

export default MyCard;