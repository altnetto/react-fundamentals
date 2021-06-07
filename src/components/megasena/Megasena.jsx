import React, { useState } from 'react'


export default (props) => {
    
    let [numeros, setNumeros] = useState(Array(props.qtdeNumeros).fill(0))

    function gerarNumerosNaoContidos(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min) + min)

        return array.includes(novoNumero) 
            ? gerarNumerosNaoContidos(array) 
            : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumeros)
        .fill(0)
        .reduce(a => [...a, gerarNumerosNaoContidos(a)], [])
        .sort((a, b) => a - b)
        setNumeros(novoArray)
    }


    return (
        <div>
            <h3>Números Gerados</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </div>

    )
}