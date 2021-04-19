import './App.css'
import React from 'react'

import Primeiro from "./components/Primeiro"
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/Layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'

export default (props) => (

    <div className="App">
        <Card title="#08 - Comunicação Indireta">
            <Super></Super>
        </Card>

        <Card title="#07 - Comunicação Direta" color="#FA6900">
            <Pai sobrenome='Antunes'></Pai>
        </Card>

        <Card title="#06 - Condicional v2" color="#4A4E4D">
            <CondicionalComIf number={3}></CondicionalComIf>
        </Card>

        <Card title="#05 - Condicional v1" color="#0E9AA7">
            <Condicional number={4}></Condicional>
        </Card>
        
        <Card title="#04 - Repeticao" color="#3da4ab">
            <Repeticao></Repeticao>
        </Card>
        
        <Card title="#03 - Exercício X" color="#f6cd61">
            Conteudo
        </Card>

        <Card title="#02 - Primeiro Componente" color="#fe8a71">
            <Primeiro />
            <ComParametro title="Esse é o título"
                subtitle="Esse é o subtítulo" />
            <ComParametro title="Opa"
                subtitle="Epa" />
        </Card>

        <Card title="#01 -Com Conteudo">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

    </div>
)