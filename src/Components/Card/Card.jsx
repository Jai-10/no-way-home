import React, { Component } from 'react'
import './Card.css'

class Card extends Component {

  render() {
    return(
      <div className="card"
        style={{
          width: "20rem",
          color: `${ this.props.theme==='light' ? "#000" : "#fff"}`,
          backgroundColor: `${ this.props.theme==='light' ? "#fff" : "#000"}`
        }}
      >
        <img className="card-img-top" src={this.props.imageURL} alt="hotel-img" />
        <div className="card-body">
              <h6 className="card-title"> {this.props.name} </h6>
              <p className='card-text location'> {this.props.location} </p>
              <span className="card-text distance"> {this.props.distance} kilometers </span> <br />
              <span className="card-text"> ₹{this.props.price} <span className='price'> night </span> </span>
              <div className='rating' style={{marginBottom:"2px"}}>
                <i className='fa-solid fa-star'></i>
                <span> {this.props.rating} </span>
              </div>
        </div>
      </div>
    )
  }
}

export default Card;