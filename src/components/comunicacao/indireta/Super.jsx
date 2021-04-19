import React from 'react'
import Sub from './Sub'

export default props => {

    function quandoClicar(valorGerado, texto) {
        console.log('Ação!!')
        console.log(valorGerado)
        console.log(texto)
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub onClicar = {quandoClicar}>Pedro</Sub>
        </div>
    );
};