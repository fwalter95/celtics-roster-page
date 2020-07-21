import React from 'react';

import './card.style.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="player"
        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.player.pid}.png`} />
        <h2> {props.player.fn} {props.player.ln} </h2>
    </div>
)