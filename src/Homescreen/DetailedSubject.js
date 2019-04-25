import React, { Component } from 'react'

export default class DetailedSubject extends Component {

  render() {
    return (
      <div onClick = {this.handleClick}>
        <li className="ph3 pv3 bb b--light-silver">
        {this.props.flashcard.question}
        </li>
      </div>
    );
  }
}
