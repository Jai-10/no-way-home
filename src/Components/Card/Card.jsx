import React, { Component } from 'react'
import './Card.css'
import pic from "./images/hotel-agencies.jpg";
import './rating/rating'

class Card extends Component {
  render() {
    return(
      <div className="card cards"
        style={{
          width: "18rem",
          color: `${ this.props.theme==='light' ? "#000" : "#fff"}`,
          backgroundColor: `${ this.props.theme==='light' ? "#fff" : "#000"}`
        }}
      >
        <img className="card-img-top" src={pic} alt="Card-img" />
        <div className="card-body">
              <h5 className="card-title">Hotel-Name</h5>
                <div style={{marginBottom:"2px"}}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                </div>
              <p className="card-text">5,565 kilometers </p>
              
              
        </div>
        
      </div>
 
    )
  }
}

export default Card;