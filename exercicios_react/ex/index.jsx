import React from 'react'
import ReactDOM from 'react-dom'
// import Component from './component'
// import {Primeiro, Segundo} from './doisComponentes'
// import FamilySilva from './familySilva'
import Family from './family'
import Member from './member'

ReactDOM.render(
<div>
    <Family lastName='Silva'>
        <Member name='Ramon'/>
    </Family>
</div>, 
document.getElementById('app'))
