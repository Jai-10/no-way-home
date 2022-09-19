import React, { Component } from 'react'
import './Header_1.css'

class Header_1 extends Component {
  render() {
    return (
      <div className='header1 d-flex justify-content-around mt-4'>
         <div className="logo">
           <img src={require("../../assets/logo.png")} alt='logoimage'
            style={{
              width:'150px',
              position: "absolute",
              top: "-20px",
              left: "0"
            }}
          />
         </div>
         <div className="search">
            <div className='d-flex flex-row justify-content-around'>
              <div className="anywhere p-2">Anywhere</div>
              <div className="vr"></div>
              <div className="anyweek p-2">Any week</div>
              <div className="vr"></div>
              <div className="addguest p-2">Add guests</div>
              <div className="searchicon p-2" style={{cursor:'pointer'}} onClick={this.props.clicked}>
                <i class="fa fa-search border rounded-circle bg-info p-2"></i></div>
            </div>
         </div>
         <div className="signIn">
           <i class="fa-solid fa-grip-lines p-1"></i>
           <i class="fa-solid fa-circle-user p-1" style={{fontSize:'22px'}}></i>
         </div>
      </div>
    )
  }
}

export default Header_1;