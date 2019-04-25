import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "../App";

class HomescreenNavbar extends Component {
    constructor(props) {
        super(props);
    
    }

    goBack = () => {
        this.props.prev()
    }
     

  showNavbar() {
    if (this.props.level === 0) {
      return (
        <nav className="ph3 ph5-ns pv3 tc bb ">
          <Link to="/homescreen" className="f6 link dim ba ph3 pv2 black br3">
            Flashcards
          </Link>
          <Link
            to="/homescreen"
            className="f6 link dim ba ph3 pv2 black br3 ml2 mr2"
          >
            Timeschedule
          </Link>
          <Link to="/" className="f6 link dim ba ph3 pv2 black br3">
            Login
          </Link>
        </nav>
      );
    }
    else if (this.props.level === 1) {
        return (
          <nav className="ph3 ph5-ns pv3 tc bb ">
            <a
              className="f6 link dim ba ph3 pv2 black br3 ml2 mr2" onClick={this.goBack}
            >
              <span className="pl1">Back to Subjects</span>
            </a>
          </nav>
        );
      } 
    else if (this.props.level === 2) {
      return (
        <nav className="ph3 ph5-ns pv3 tc bb ">
          <a
            className="f6 link dim ba ph3 pv2 black br3 ml2 mr2"
          >
            <title>chevronLeft icon</title>
            <span className="pl1">Previous</span>
          </a>
          <a
            className="f6 link dim ba ph3 pv2 black br3 ml2 mr2"
          >
            <span className="pr1">Next</span>

            <title>chevronRight icon</title>
          </a>
        </nav>
      );
    }
  }
  render() {
    return this.showNavbar();
  }
}

export default HomescreenNavbar;
