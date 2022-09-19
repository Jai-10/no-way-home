import React, { Component } from 'react'
import './Footer_1.css'

class Footer_1 extends Component {

  state = {
    isFooterOpen: false,
    footerIcon: "angle-up"
  }

  openDiv = () => {
    // let icon = document.querySelector("#angle-icon")
    if (this.state.isFooterOpen === false) {
      this.setState({ isFooterOpen: true, footerIcon: "xmark" })
      console.log('footer opened');
    }
    else if (this.state.isFooterOpen === true) {
      this.setState({ isFooterOpen: false, footerIcon: "angle-up" })
      console.log('footer closed');
    }
  }
 

  

  render() {
    return (

      <div className='footer-one'>
        
        <ul>
          <li><i className="fa-solid fa-copyright"></i> 2022 Airbnb, Inc.</li>
          <li>&nbsp;Privacy . Terms . Sitemap . Company details . Destinations </li>
          <li id="language"><i className="fa-sharp fa-solid fa-globe"> </i> English(IN)</li>
          <li><i className="fa-solid fa-indian-rupee-sign"></i> INR</li>
          &nbsp; &nbsp;<li className="line"> Support and Resources</li>
          &nbsp;<li onClick={this.openDiv} ><i id="angle-icon"className={`fa-solid fa-${this.state.footerIcon}`}></i></li>
         
          
        </ul>
      
      </div>
      
    )
  }
}

export default Footer_1;