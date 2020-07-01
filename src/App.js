import React, { Component } from 'react';
import './App.css';
import QuizBar from './components/QuizBar';
import QuizType from './components/QuizType';

class App extends Component{

  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
          <div className="App">
              <QuizBar />
              <QuizType/>
          </div>
    )
  }
}


export default App;
