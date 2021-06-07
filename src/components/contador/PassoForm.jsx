import React from 'react'

import './Contador.css'

export default (props) => {

    return (
        <div className='Contador'>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" value={props.passo}
            onChange = {e => props.onPassoChange(+e.target.value)}/>
        </div>

    );

};
