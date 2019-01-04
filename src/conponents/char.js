import React from 'react';


const CharComponent = (props) => {
    const style = {
      display: 'inline-block',
      textAlign: 'center',
      border: '1ps solid black',
      margin: '16px',
      color: 'red'
    }
    return (
        <div style={style} className='CharComponent'>
            <p onClick={props.click}>CharComponent : </p>
            { props.list.map((listItem) =>{
                return (
                    <div>
                        <p>{listItem}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default CharComponent;