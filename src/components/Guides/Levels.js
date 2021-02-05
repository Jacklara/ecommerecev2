import React from 'react';
import './Guides.css';

const Levels = (props) => {
    return (
        <div >
            
            <img src={props.image} alt="GymPic" className="levelpic"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <input type="submit" value={`$ ${props.price}`} className="btnlevel"/>
            
        </div>
    )
}

export default Levels;