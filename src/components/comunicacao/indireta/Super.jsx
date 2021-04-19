import React from 'react'
import Sub from './Sub'

export default props => {

    function quandoClicar() {
        console.log('Ação!!')
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub sobrenome='Silva'>Pedro</Sub>
        </div>
    );
};