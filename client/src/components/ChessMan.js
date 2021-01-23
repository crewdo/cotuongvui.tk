import React from 'react';
import {getStyleByCoordinate} from  './Common';

export const ChessMan = ({rotate, chessMan, onClick}) => {
    return (
        <div className={`chessMan ${chessMan.color}`} onClick={onClick} id={chessMan.id}
             style={getStyleByCoordinate(rotate, chessMan.position)}>{chessMan.type}</div>
    );
}