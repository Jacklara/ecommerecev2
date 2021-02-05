import React from 'react';
import Levels from './Levels'
import { guideData } from './data'
import './Guides.css';

function Intermediet() {
    return (
        <div>
            <h2 className="direction">Intermediet Workouts</h2>
            <div className="products">
                {/* eslint-disable-next-line */}
                {guideData.map((data, index) => {
                    if (index > 3 && index < 8) {
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

export default Intermediet;