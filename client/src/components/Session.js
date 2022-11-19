import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import Button from '@mui/material/Button';
import Player from './Player';

export default function Session() {
    return(
        <div id="session-body">
            <div id="session-header">
                <Button variant="contained"  style={{ background: '#2E3B55' }}>Player</Button>
                <Button variant="contained"  style={{ background: '#2E3B55' }}>Comments</Button>
            </div>
            <div id="content-session">
            <Player/>
            </div>
           

        </div>

    )
}