import React, { Component } from "react";

class SubjectEntry extends Component {

  render() {
    return (
      <div onClick = {this.handleClick}>
        <li className="ph3 pv3 bb b--light-silver" onClick={this.props.selectSubject.bind(this, this.props.title, this.props.ident)}>
          {this.props.title}
        </li>
      </div>
    );
  }
}
export default SubjectEntry;
