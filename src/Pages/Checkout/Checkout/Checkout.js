import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='mx-auto my-5'>
            <h2 className='text-center'>Please Checkout your booking</h2>
            <Row>
                <Col>
                    <img className='w-50%' src="https://i.ibb.co/n7Q6YMW/checkout.jpg" alt="" />
                </Col>
                {/*  <Col>
                    <h3>
                        Please pay bill
                    </h3>
                </Col> */}

            </Row>

        </div>


    );
};

export default Checkout;