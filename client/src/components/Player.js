import YouTubePlayerExample from './PlaylisterYouTubePlayer';
import * as React from 'react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import PauseCircle from '@mui/icons-material/PauseCircle';
import FastForward from '@mui/icons-material/FastForward';
import FastRewind from '@mui/icons-material/FastRewind';

export default function Player() {

    return (
        <div>
          <header >
            <YouTubePlayerExample />
            <div id="player-button-session">
            <Button variant="contained"  style={{ background: '#2E3B55' }}><FastRewind/></Button>
            <Button variant="contained"  style={{ background: '#2E3B55' }}><PlayArrow/></Button>
            <Button variant="contained"  style={{ background: '#2E3B55' }}><PauseCircle/></Button>
            <Button variant="contained"  style={{ background: '#2E3B55' }}><FastForward/></Button>
            </div>
            
          </header>
        </div>
      );
}