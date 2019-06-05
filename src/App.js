import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/home';



class App extends Component {
  constructor() {
    super()
    this.state = {
      headerText: "Header",
      homeMounted: true
    }
  }

  printIt() {
    alert('i am passed here')
  }

  onChangeHeader(newName) {
    this.setState({
      headerText: newName
    })

  }
  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }
  render() {

    let homeCmp = '';
    if (this.state.homeMounted) {

      homeCmp =
        <Home
          name={'mano'}
          age={27}
          // user={user}
          print={this.printIt}
          changeText={this.onChangeHeader.bind(this)}
          initialName={this.state.headerText}

        />;

    }
    // let user = {
    //   name: 'manoj kumar',
    //   hobbies: ['Cricket', 'football', 'Story Writing']
    // }

    return (
      <div className="App">
        <header className="App-header">

          <p><Header headerText={this.state.headerText} /></p>

        </header>

        <p>{homeCmp}</p>
<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">unMounted</button>
      </div>
    );
  }
}
export default App;
