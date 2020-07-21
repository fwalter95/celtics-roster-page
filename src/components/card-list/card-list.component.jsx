import React from 'react';

import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.players.map(player => 
            <Card key={player.pid} player={player} />)
        }
    </div>);