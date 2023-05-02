import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isJoy: false, isJonas: false}

  firstName = () => {
    this.setState(prevState => ({isJoy: !prevState.isJoy}))
  }

  lastName = () => {
    this.setState(prevState => ({isJonas: !prevState.isJonas}))
  }

  render() {
    const {isJoy, isJonas} = this.state

    let displayFirstName
    let displayLastName
    if (isJoy) {
      displayFirstName = (
        <div className="name-card">
          <p>Joe</p>
        </div>
      )
    }

    if (isJonas) {
      displayLastName = (
        <div className="name-card">
          <p>Jonas</p>
        </div>
      )
    }

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons">
          <button type="button" onClick={this.firstName} className="button">
            Show/Hide Firstname
          </button>
          <button type="button" onClick={this.lastName} className="button">
            Show/Hide Lastname
          </button>
        </div>
        <div className="names">
          {displayFirstName}
          {displayLastName}
        </div>
      </div>
    )
  }
}

export default ShowHide
