import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/smHc70Z/ban2.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Traditional Wedding Photography</h3>
                    <p>This classic style is characterized by the predominance of posed portrait photos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/xGvh8gp/ban3.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Vintage Style Wedding Photography</h3>
                    <p>Vintage wedding photography style is all the rage today. People like the feeling of nostalgia.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/8b1vtJq/ban5.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Portrait Wedding Photography</h3>
                    <p>
                        The main purpose of this wedding photo style is to photograph portraits of people.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;