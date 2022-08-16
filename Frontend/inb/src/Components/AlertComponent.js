import React, { Component } from 'react'

export default class AlertComponent extends Component {
  render() {
    return (
        <div className="alert alert-primary" role="alert">
        {this.props.alertitem}
      </div>
    )
  }
}
