import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center'>Service detail Info: {serviceId}</h2>

            <Row>
                <Col>

                    <img src="https://i.ibb.co/cXSMccq/ban1.jpg" alt="" />
                </Col>
                <Col>
                    <div className='text-center'>
                        <Link to="/checkout">
                            <button className='btn btn-primary'>Proceed Checkout</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceDetail;