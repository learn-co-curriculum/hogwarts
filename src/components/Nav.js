import piggy from '../porco.png';
import React from 'react';
import poop from 'poop'

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  )
}

export default Nav
