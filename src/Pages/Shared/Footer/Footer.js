import React from 'react';
import { Card } from 'react-bootstrap';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <Card className="text-center sticky-bottom bg-dark">
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body className='blockquote-footer '>
                <Card.Title className='color-white'>Selfie Studio</Card.Title>
                <Card.Text>
                    <p><small>copyright @ {year} </small></p>
                </Card.Text>

            </Card.Body>
        </Card>




    );
};

export default Footer;