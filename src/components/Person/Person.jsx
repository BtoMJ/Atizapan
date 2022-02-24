import React from 'react';
import person from '../../assets/1.png';
import banda from '../../assets/ICN_BARRA_COLOR.png';
import './Person.css';

export const Person = () => {
    return(
        <div className="personContainer">
            <img className="imgPerson" src={person} alt="funcionario" />
            <img className="banda" src={banda} alt="banda" />
        </div>
    )
}