import React from 'react';
import Levels from './Levels'
import { guideData } from './data'
import './Guides.css';

function Advanced() {
    return (
        <div>
            <h2 className="direction">Advanced Workouts</h2>
                <div className="products">
                {/* eslint-disable-next-line */}
                    {guideData.map((data, index) => {
                        if (index > 7) {
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

export default Advanced;