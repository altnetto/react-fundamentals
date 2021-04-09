import React from 'react'

export default props => {

    return (
        <div>
            <h2>O número é {props.number}</h2>
            {props.number % 2 === 0 
                ? <span>Par</span>
                : <span>Ímpar</span>
            }
        </div>
    )

}