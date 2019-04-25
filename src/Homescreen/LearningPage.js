import React, { Component } from "react";

export default class LearningPage extends Component {
  state = {
    revealAnswer: false
  };

  showContent() {
    //default: answer
    if (!this.state.revealAnswer) {
      return <div className="outline tc" onClick={this.showAnswer} >Frage</div>;
    } else if (this.state.revealAnswer) {
      return (
      <div className="outline tc">
        <div>Frage</div>
        <div>Antwort</div>
      </div>
      )
    }
  }
  showProgress() {
    return (
    <div>
      Kategorie 1
    </div>
    )
  }
  showAnswer = e => {
    this.setState({
      revealAnswer: true
    });
  };
  render() {
    return (
      <div className="outline tc">
        {this.showProgress()}
        <div></div>
        {this.showContent()}
      </div>
    );
  }
}
