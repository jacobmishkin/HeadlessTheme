import React, {Component} from 'react';

const LogoCircleStyle = {
  fill: 'none',
  stroke: '#8E8D8A',
};

const LogoTextStyle = {
  fontFamily: 'Cervo-Light',
  fontSize: '64px',
  fill: '#8E8D8A',
};



const Logo = () => (
  <div className="logo">
    <svg width="84" height="84" viewBox="0 0 84 84">
      <title id="site_logo">portfolio Logo</title>
      <circle
        className="circle"
        style={LogoCircleStyle}
        id="a"
        cx="41"
        cy="41"
        r="41"
      />
      <text>
        <tspan style={LogoTextStyle} className="logo_text" x="17.256" y="63">
          JM
        </tspan>
      </text>
    </svg>
  </div>
);

export default Logo;