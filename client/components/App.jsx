import React from 'react'
import anime from 'animejs/lib/anime.es.js';

class App extends React.Component  {
  constructor () {
    super ()

    this.state = {
      example: 'Hello World'
    }
  }

  clickHandler = (evt) => {
    evt.preventDefault()
    this.setState({
      example: 'You changed the World. Hello.'
    })

    anime({
      targets: '.postRenderedTag',
      translateX: [
        {value: -250, duration: 1000, delay: 0},
        {value: 0, duration: 1000, delay: 0},        
        {value: 250, duration: 1000, delay: 0},
        {value: 0, duration: 1000, delay: 0}
      ],
      easing: 'linear',
      loop: true
    });

    return
  }


  render() {
    return (
      <React.Fragment>
        <div className="wrapperDiv">
            <button className="activateAnime"
              onClick={this.clickHandler}
            >Click me!</button>
          <div className="innerDiv">
            <div className="animationDiv"></div>
          </div>
        </div>
        <br/>
        <p className="postRenderedTag">{this.state.example}</p>
      </React.Fragment>
    )
  }
}

export default App

