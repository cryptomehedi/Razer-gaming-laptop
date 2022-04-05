import React from 'react';
import './About.css'
const About = () => {
    return (
        
      <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item text-center left">
                  <div className="app-title">
                    <span>CONTACT US</span>
                  </div>
                  <div className="app-contact">CONTACT INFO : +880 1700 000 000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About;