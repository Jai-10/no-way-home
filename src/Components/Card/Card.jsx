import React, { Component } from 'react'
import './Card.css'

class Card extends Component {

  render() {

    let icons = ''
    for (let i=0; i<this.props.rating; i++) {
      icons += (`<i className="fa-solid fa-star"></i>`)
    }


    return(
      <div className="card cards"
        style={{
          width: "18rem",
          color: `${ this.props.theme==='light' ? "#000" : "#fff"}`,
          backgroundColor: `${ this.props.theme==='light' ? "#fff" : "#000"}`
        }}
      >
        <img className="card-img-top" src={this.props.imageURL} alt="hotel-img" />
        <div className="card-body">
              <h5 className="card-title"> {this.props.name} </h5>
                <div style={{marginBottom:"2px"}}>
                  {icons}
                </div>
              <p className="card-text"> {this.props.distance} kilometers </p>
        </div>
      </div>
    )
  }
}

export default Card;