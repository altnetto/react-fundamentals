import './App.css'
import React from 'react'

import Primeiro from "./components/Primeiro"
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/Layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (

    <div className="App">
        <Card title="#06 - Condicional v2">
            <CondicionalComIf number={3}></CondicionalComIf>
        </Card>

        <Card title="#05 - Condicional v1">
            <Condicional number={4}></Condicional>
        </Card>
        
        <Card title="#04 - Repeticao">
            <Repeticao></Repeticao>
        </Card>
        
        <Card title="#03 - Exercício X">
            Conteudo
        </Card>

        <Card title="#02 - Primeiro Componente">
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