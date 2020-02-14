import React from 'react'
import anime from 'animejs/lib/anime.es.js';

// anime({
//   targets: 'div',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800
// });

class App extends React.Component  {
  
  render() {
    return (
      <React.Fragment>
        <div className="wrapperDiv">
            <button>Click me!</button>
          <div className="innerDiv">
            <div className="animationDiv">
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App

