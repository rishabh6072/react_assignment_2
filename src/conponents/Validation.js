import React from 'react';


const validationComponent = (props) => {
    const length = props.length;
    // console.log('length', length);
    let status = 'too short';
    let style = {
        color: 'red',
    }
    if(length > 5) {
        status = 'long enough'
        style = {
            color: 'green',
        }
    }
    return (
        <div className='validationComponent'>
            <p>Text length: <span style={style}> {status} </span></p>
        </div>
    );
}

export default validationComponent;