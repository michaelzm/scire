import React, { Component } from "react";
import SubjectEntry from "./SubjectEntry";
import uuid from "uuid";
import DetailedSubject from "./DetailedSubject";

class Subjects extends Component {
  constructor(props) {
    super(props);

    this.selectSubject = this.selectSubject.bind(this);
  }
  state = {
    selection: "",
    selectedId: "",
    subjects: [
      {
        title: "minusone",
        id: uuid.v4(),
        flashcards: [
          {
            question: "frage1",
            answer: "antwort1"
          },
          {
            question: "frage2",
            answer: "antwort2"
          },
          {
            question: "frage3",
            answer: "antwort3"
          },
          {
            question: "frage4",
            answer: "antwort4"
          },
          {
            question: "frage5",
            answer: "antwort5"
          },
          {
            question: "frage6",
            answer: "antwort6"
          },
          {
            question: "frage7",
            answer: "antwort7"
          },
        ]
      },
      { title: "minustwo", id: uuid.v4(),
      flashcards: [
        {
          question: "frage8",
          answer: "antwort1"
        },
        {
          question: "frage9",
          answer: "antwort2"
        },
        {
          question: "frage3",
          answer: "antwort3"
        },
        {
          question: "frage4",
          answer: "antwort4"
        },
        {
          question: "frage5",
          answer: "antwort5"
        },
        {
          question: "frage6",
          answer: "antwort6"
        },
        {
          question: "frage7",
          answer: "antwort7"
        },
      ] },
      { title: "minuthree", id: uuid.v4() },
      { title: "minusfour", id: uuid.v4() },
      { title: "minusfive", id: uuid.v4() },
      { title: "minussix", id: uuid.v4() },
      { title: "minusseven", id: uuid.v4() }
    ]
  };

  selectSubject = (title, id) => {
    console.log("subject " + title);
    this.setState({ selection: title, selectedId:id });
    this.props.next();
    console.log("setting state");
  };

  updateSelection() {}

  getDetailedSubject() {
    var selectedItemIndex = -1;
    for(var i = 0; i< this.state.subjects.length; i++){
        if(this.state.subjects[i].id === this.state.selectedId){
            selectedItemIndex = i
            
        }
    }
    if(this.state.subjects[selectedItemIndex].flashcards){
        return (
            <ul className="bg-black-10 list pl0 ml0 center mw6 ba b--light-silver br2">
              {this.state.subjects[selectedItemIndex].flashcards.map(flashcard => (
                <DetailedSubject
                  title={this.state.subjects[selectedItemIndex].title}
                  flashcard={flashcard}
                />
              ))}
            </ul>
          );
    }
    else return (
      <div>no questions available</div>
    )
  }

  getSubjectEntries() {
    return (
      <ul className="bg-black-10 list pl0 ml0 center mw6 ba b--light-silver br2">
        {this.state.subjects.map(subject => (
          <SubjectEntry
            key={subject.id}
            ident={subject.id}
            title={subject.title}
            selectSubject={this.selectSubject}
            content={subject}
          />
        ))}
      </ul>
    );
  }

  render() {
    if (this.state.selection !== "" && this.props.level === 1) {
      return this.getDetailedSubject();
    } else return this.getSubjectEntries();
  }
}

export default Subjects;
