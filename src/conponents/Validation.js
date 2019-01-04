import React from 'react';


const validationComponent = (props) => {
    const length = props.length;
    // console.log('length', length);
    let status = 'too short';
    if(length > 5) {
        status = 'long enough'
    }
    return (
        <div className='validationComponent'>
            <p>Text length: {status} </p>
        </div>
    );
}

export default validationComponent;