import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: this.props.isLoading
        }
    }


    changeLoadingState = () => {
        if (this.state.isLoading === true) {
            this.setState({ isLoading: false })
        }
    }



    render() {
    return (
        <div className='loading'
            onClick={this.changeLoadingState}
            style={{
                top: `${ this.state.isLoading===true ? '0' : "-100%" }`
            }}
        >
            <div className='loading-text'>
                <div className="loading-animation">
                    <div className="loading-h1">
                        <h1>Loading</h1>
                    </div>
                    <div className="loading-dots">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                        <div className="dot3"></div>
                    </div>
                </div>
            </div>


            <div className="loading-quotes-container">
                <p className='loading-quotes'>Travelling is a therapy</p>
                <p className='loading-quotes'>Work. Travel. Save. Repeat</p>
                <p className='loading-quotes'>Let's get lost</p>
                <p className='loading-quotes'>Oh, the places you'll go.</p>
                <p className='loading-quotes'>Where to next?</p>
                <p className='loading-quotes'>To Travel is to Live</p>
                <p className='loading-quotes'>Make memories all over the world</p>
                <p className='loading-quotes'>Go where you feel most alive</p>
            </div>


            <div className="continue">
                <p>(Click anywhere to continue)</p>
            </div>
        </div>
    )
  }
}

export default Loading