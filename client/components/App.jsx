import React from 'react'
import anime from 'animejs/lib/anime.es.js';

class App extends React.Component  {
  constructor () {
    super ()

    this.state = {
      example: 'Hello World',
      moving: 'Move Around',
      colorState: false
    }
  }

  moveAroundHandler = (evt) => {
    evt.preventDefault()

    if (this.state.moving == 'Move Around') {
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

      this.setState({
        moving: 'Stop Moving'
      })

    } else if (this.state.moving != 'Move Around') {
      anime.remove('.postRenderedTag')
      
      this.setState({
        moving: 'Move Around'
      })
    }
  }

  changeLookHandler = (evt) => {
    evt.preventDefault()

    anime({
      targets: '.postRenderedTag',
      color: '#FF69B4',
      easing: 'easeInOutQuad'
    })

  }

  changeWordingHandler = (evt) => {
    evt.preventDefault()

    // Setting state to something new.
    this.setState({
      example: 'You changed the World. Hello.'
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapperDiv">
          <h1>AnimeJS On Text</h1>
          <button className="moving"
            onClick={this.moveAroundHandler}
          >{this.state.moving}
          </button>
          <br></br>
          <button className="" onClick={this.changeLookHandler}>
            Change look
          </button>
          <button className="" onClick={this.changeWordingHandler}>
            Change wording
          </button>
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

