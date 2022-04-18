import React from 'react';

import expert1 from '../../../images/wild/wild1.jpg';
import expert2 from '../../../images/wild/wild2.jpg';
import expert3 from '../../../images/wild/wild3.jpg';
import expert4 from '../../../images/wild/wild4.jpg';
import expert5 from '../../../images/wild/wild5.jpg';
import expert6 from '../../../images/wild/wild6.jpg';
import Other from '../Other/Other';



const experts = [
    { id: 1, name: 'Mammal Photography', dis: 'First, mammals are what most people think of when you talk about wildlife, and so mammal photography is closely associated with wildlife', img: expert1 },
    { id: 2, name: 'Undelight Photography', dis: 'One of the easiest ways to get started with photographing wildlife is at a local park or preserve associated with wild animal. ', img: expert2 },
    { id: 3, name: 'Getting Close to Wildlife', dis: 'First, mammals are what most people think of when you talk about wildlife, and so mammal photography is closely associated with wildlife and local.', img: expert3 },
    { id: 4, name: 'Finding Wildlife to Photograph', dis: 'One of the easiest ways to get started with photographing wildlife is at a local park or preserve is closely associated with wildlife. ', img: expert4 },
    { id: 5, name: 'Mammal Photography', dis: 'Wildlife photography generally happens out in nature, where you can’t bring your off-camera flashes preserve associated wildlife.', img: expert5 },
    { id: 6, name: 'Dealing With Tricky', dis: 'Dealing with tricky are what most people think of when you talk about wildlife, and so mammal photography is closely associated with wildlife', img: expert6 },
]


const Others = () => {
    return (
        <div id="others" className='container'>
            <h2 className='text-primary text-center mt-5'>Other Services</h2>
            <div className="row">
                {
                    experts.map(expert => <Other
                        key={expert.id}
                        expert={expert}
                    ></Other>)
                }
            </div>
        </div>
    );
};

export default Others;