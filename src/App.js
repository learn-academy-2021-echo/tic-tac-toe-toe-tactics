import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      sqArry:  [],
    }
  }
//we need to manipulate the code so that both x's and o's show up on our gameboard

  handleGamePlay = (index) => {
    const { squares, sqArry } = this.state
    if(index === sqArry) {
      squares[index] = "❌"
      this.setState({squares: squares})
    } else {
    squares[index] = "〇"
    this.setState({squares: squares})
    }  
  }





  render(){
    
    
        return(
          <>
            <h1>Treasure Hunt Game</h1>
            <div className="gameboard">
            {this.state.squares.map((value, index) => {
              return (
                <Square 
                value={value} 
                index={index}
                handleGamePlay={this.handleGamePlay}
                />
              )
            })}
            </div>
          </>
        )
      }
    }
export default App
