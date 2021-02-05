import React from 'react';
import Levels from './Levels'
import { guideData } from './data'
import './Guides.css';

export default function Beginner() {

    return (
        <div>
            <h2 className="direction">Beginner Workouts</h2>
            <div className="products">
                {/* eslint-disable-next-line */}
                {guideData.map((data, index) => {
                    if (index < 4) {
                        return <Levels 
                        image={data.image}
                        name={data.name}
                        description={data.description}
                        price={data.price}
                        />
                    }
                })}
            </div>
        </div>
    )
}