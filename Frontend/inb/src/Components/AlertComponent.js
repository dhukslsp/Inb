import React, { Component } from 'react'

export default class AlertComponent extends Component {
  render() {
    return (
        <div className="alert alert-primary" role="alert" id = "myalertbro">
        {this.props.alertitem}
      </div>
    )
  }
}
