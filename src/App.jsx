import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header_1 from './Components/Header_1/Header_1'
import Header_2 from './Components/Header_2/Header_2'
import ShowMap from './Components/ShowMap/ShowMap';
import Footer_1 from './Components/Footer_1/Footer_1';
import Footer_2 from './Components/Footer_2/Footer_2';
import Search from './Components/Search/Search';
import MainContent from './Components/MainContent/MainContent';
import Loading from './Components/Loading/Loading';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showHeader : true,
      isNavOpen: false,
      theme: 'light',
      isLoading: true
    }
   }




  //  header 1
  handleHeaderClick = () =>{
    this.setState({showHeader:false});
  }
  handleSearchClick = ()=>{
    this.setState({showHeader:true});
  }



  // change theme
  changeTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: "dark" })
    } else if (this.state.theme === 'dark') {
      this.setState({ theme: "light" })
    }
  }




  render() {

    const isHeader = this.state.showHeader;
    let data;
    if(isHeader){
      data = <Header_1 theme={this.state.theme} clicked={this.handleHeaderClick}/>
    } else {
      data = <Search theme={this.state.theme} clicked={this.handleSearchClick}/>
    }


  return (
    <div className="App">

      <Loading
        isLoading={this.state.isLoading}
      />

      <Navbar theme={this.state.theme} isNavOpen={this.state.isNavOpen} />

      {/* header 1 */}
      <div className="header-1">
        {data}
      </div>

      <Header_2 theme={this.state.theme} />

      <div className="main-content-container">
        <MainContent theme={this.state.theme} />
      </div>
      
      {/* <Footer_1 theme={this.state.theme} /> */}

      {/* <Footer_2 theme={this.state.theme} /> */}

      <ShowMap />



      <div className="theme"
        onClick={this.changeTheme}
      >
        <i className="fa-solid fa-moon"></i>
      </div>
      
    </div>
  );
  }
}

export default App;
