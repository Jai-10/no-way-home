import React, { Component } from 'react';
import './App.css';
import Website from './Components/Website/Website'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme: 'light'
    }
   }



  // change theme
  changeTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: "dark" })
    } else if (this.state.theme === 'dark') {
      this.setState({ theme: "light" })
    }
  }


1

  render() {
  return (
    <div className="App">

      <Website theme={this.state.theme} />


      <div className="theme" onClick={this.changeTheme}
        style={{
          backgroundColor: `${this.state.theme==='light' ? "black" : "white"}`,
          color: `${this.state.theme==='light' ? "white" : "black"}`
        }}
      >
        <i className="fa-solid fa-moon"></i>
      </div>
      
    </div>
  );
  }
}

export default App;
