import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Host from './Components/Host/Host'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'  


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

    // <Router >
      <div className="App">

        {/* <Routes>
          <Route path='/' element={<Home theme={this.state.theme} to='/' />} />
          <Route path='/host' element={<Host theme={this.state.theme} />} />
          <Route path='*' element={ <h1 style={{textAlign: "center"}}> Error! Page not found </h1> } />
        </Routes> */}

        <Home theme={this.state.theme} />

        <div className="theme" onClick={this.changeTheme}
          style={{
            backgroundColor: `${this.state.theme==='light' ? "black" : "white"}`,
            color: `${this.state.theme==='light' ? "white" : "black"}`
          }}
        >
          <i className="fa-solid fa-moon"></i>
        </div>
        
      </div>
    // </Router>
  );
  }
}

export default App;
