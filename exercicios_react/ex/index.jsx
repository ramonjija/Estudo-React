import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component'
import {Primeiro, Segundo} from './doisComponentes'

ReactDOM.render(
<div>
    <Primeiro />
    <Component value="Show!" />
    <Segundo />
    <Component value="Show de novo!" />
</div>, 
document.getElementById('app'))
