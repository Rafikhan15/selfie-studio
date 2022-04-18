import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='my-5 px-5'>
            <Row className='mx-auto'>
                <Col>
                    <h3>Difference between authorization and authentication?</h3>
                    <br />
                    <p>
                        <span className='fw-bold'>Authentication</span> is the act of validating that users are whom they claim to be. This is the first step in any security process.
                        Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.
                    </p>
                    <p>
                        <span className='fw-bold'>Authorization</span> in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.Determines what users can and cannot access.
                        Authorization always takes place after authentication.

                    </p>
                    <br />
                    <h3>What other services does firebase provide other than authentication?</h3>
                    <p>
                        <span className='fw-bold'>Firebase provide </span>  a Backend-as-a-Service BaaS that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.
                        It provides cloud cumputing, database managenent, hosting, storage and many  backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>
                </Col>
                <Col>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <br />
                    <p>
                        <span className='fw-bold'>Firebase</span> is a complete package of products that allows to build web and mobile apps, improve the app quality and help your clients grow their business it is develop by Google.Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if we are looking to develop mobile apps such as live streaming, chat messaging, etc.
                    </p>
                    <p>
                        <span className='fw-bold'>Implementation of Authentication</span> is used by a server when the server needs to know exactly who is accessing their information or site so it has many authentication system.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>

                </Col>
            </Row>
        </div>
    );
};

export default Blogs;
