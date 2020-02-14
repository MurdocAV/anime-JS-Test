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
      example: 'You changed the Hello World.'
    })

    anime({
      targets: '.postRenderedTag',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
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

