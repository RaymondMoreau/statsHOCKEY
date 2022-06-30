import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Modal = ({ is_open, setIsOpen }) => {
    if(is_open){
        return (
        <div className="custom_modal">
            <div className="custom_modal__container">
        <Card>
        <Card.Header>Sign up Complete!</Card.Header>
        <Card.Body>
            <Card.Title>Thank you for signing up!</Card.Title>
            <Card.Text>
            We will send you periodic content via e-mail that will support your love of hockey!
            </Card.Text>
            <Button variant="primary">Take a Mystery Test (to be implemented)</Button>
        </Card.Body>
        <Card.Footer className="text-muted">turi ipipip turi ip</Card.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Card>
            </div>

        </div>);
    } 
    return <></>;
    
}

export default Modal;

