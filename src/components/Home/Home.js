import React from 'react';
import './home.css';

function Home() {
    return (
      
      <div className="homepage">
          <div className="slider">
                <figure>
                    <img className="slideimg" src={`${process.env.PUBLIC_URL}./photos/slidelogo.jpg`} alt="jlxlogo"/>
                    <img className="slideimg" src="./photos/gymbw2.jpg" alt="barbell"/>
                    <img className="slideimg" src="./photos/gymbw.jpg" alt="empty gym"/>
                    <img className="slideimg"src="./photos/gymbw3.jpg" alt="people squating"/>
                    <img className="slideimg" src="./photos/jlxlogo.jpg" alt="jlxlogo"/>
                </figure>
            </div>
          <div className="maininfo">
            <div className="q">
              <h2>At JLX Training we believe in getting stronger both physically and mentally through exercise.</h2>
            </div>
            <div className="pic">
              <img className="homepic" src={"./photos/homepic.jpg"} alt="quote1"/>
            </div>
            <div className="q">
              <img className="homepic" src={"./photos/homepic2.jpg"} alt="quote2"/>
            </div>
            <div className="pic">
              <h2>There are plenty of workout guides out there but there are few that will focus on your overall health and that is what makes us stand out.</h2>
            </div>
          </div>
      </div>
    );
  }

export default Home;