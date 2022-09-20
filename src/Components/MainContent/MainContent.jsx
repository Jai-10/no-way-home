import React, { Component } from 'react'
import Card from '../Card/Card';
import './MainContent.css'
import api from '../../api'

class MainContent extends Component {

  render() {
    return (
      <div className='main-content'>
        
        {
          api.map(card => {
            return <Card
              key = {card.id}
              imageURL = {card.image}
              name = {card.name}
              rating = {card.rating}
              distance = {card.distance}
              theme = {this.props.theme}
            />
          })
        }
        
      </div>
    )
  }
}

export default MainContent;