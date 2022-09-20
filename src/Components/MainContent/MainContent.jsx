import React, { Component } from 'react'
import Card from '../Card/Card';
import './MainContent.css'


class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
        <Card theme={this.props.theme} />
      </div>
    )
  }
}

export default MainContent;