import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButtons'

export default props => (
    <div role="form" className="todoForm" >
        <Grid cols="12 9 10">
            <input id="description" className="form-control" placeholder="Adicione uma Tarefa"></input>
        </Grid>
        <Grid cols="12 3 2">
           <IconButton style="primary" icon="plus"></IconButton>
        </Grid>
    </div>
)