import React from 'react'
import './Header_2.css'

const Header_2 = (props) => {

  const lightTheme = {
    color: "#525252",
    backgroundColor: "white"
  }
  const darkTheme = {
    color: "white",
    backgroundColor: "#243138"
  }

  return (
      <div id='header-two-parent'>
      <div className='header-two-container'
        style={ props.theme==='light' ? lightTheme : darkTheme }
      >
        <div className='header-two'>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-tree"></i>
            <p>National Parks</p>
          </div>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-house-chimney"></i>
            <p>Small Homes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-golf-ball-tee"></i>
            <p>Golfing</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain"></i>
            <p>Caves</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-snowflake"></i>
            <p>Arctic</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-fire"></i>
            <p>Camping</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain-city"></i>
            <p>Country side</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-brands fa-fort-awesome"></i>
            <p>Castles</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-water-ladder"></i>
            <p>Amazing Pools</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-ship"></i>
            <p>Boats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-anchor"></i>
            <p>Houseboats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-paintbrush"></i>
            <p>Creative Space</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tower-observation"></i>
            <p>Towers</p>
          </div>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-tree"></i>
            <p>National Parks</p>
          </div>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-house-chimney"></i>
            <p>Small Homes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-golf-ball-tee"></i>
            <p>Golfing</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain"></i>
            <p>Caves</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-snowflake"></i>
            <p>Arctic</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-fire"></i>
            <p>Camping</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain-city"></i>
            <p>Country side</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-brands fa-fort-awesome"></i>
            <p>Castles</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-water-ladder"></i>
            <p>Amazing Pools</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-ship"></i>
            <p>Boats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-anchor"></i>
            <p>Houseboats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-paintbrush"></i>
            <p>Creative Space</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tower-observation"></i>
            <p>Towers</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-landmark-dome"></i>
            <p>Domes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-water"></i>
            <p>Lake</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-umbrella-beach"></i>
            <p>Beaches</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-van-shuttle"></i>
            <p>Campervans</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-sun"></i>
            <p>Amazing views</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mug-saucer"></i>
            <p>Bed & Breakfasts</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-landmark"></i>
            <p>Historical Homes</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tents"></i>
            <p>Camping</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-landmark-dome"></i>
            <p>Domes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-water"></i>
            <p>Lake</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-umbrella-beach"></i>
            <p>Beaches</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-van-shuttle"></i>
            <p>Campervans</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-sun"></i>
            <p>Amazing views</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mug-saucer"></i>
            <p>Bed & Breakfasts</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-landmark"></i>
            <p>Historical Homes</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tents"></i>
            <p>Camping</p>
          </div>
        </div>

        <div className="sort-filter">
          <div className="sort">
            <i className="fa-solid fa-sort"></i>
            <p>Sort</p>
          </div>
          <div className="filter">
            <i className="fa-solid fa-filter"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>
      </div>
    )
  // }
}

export default Header_2;