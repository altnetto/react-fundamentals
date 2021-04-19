import React from 'react'
import Filho from './Filho'

export default props => (
    <div>
        <Filho sobrenome = 'Silva'>João</Filho>
        <Filho sobrenome = {props.sobrenome}>Maria</Filho>
        <Filho {...props}>Pedro</Filho>
    </div>
)