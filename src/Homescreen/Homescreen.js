import React, { Component } from 'react';
import { Link } from "react-router-dom"
import HomescreenNavbar from './HomescreenNavbar'
import LearningPage from './LearningPage'
import Subjects from './Subjects'

class Homescreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            flashcard: {
                question: "Die Frage",
                answer: "die Antwort",
                level: "die Kategorie der Karte"
            },
            level: 0
        }
    }
    addSubject(){

    }
    goNext = () => {
        console.log("gonext called in hs")
        this.setState({
            level: 1
        })
    }

    goPrev = () => {
        console.log("goprev called in hs")
        this.setState({
            level: 0
        })
    }
    render(){
        return (
            <div className = "homescreenlayout">
                <div>
                    <HomescreenNavbar level= {this.state.level} next = {this.goNext} prev = {this.goPrev} />
                </div>
                <div>
                    <Subjects level = {this.state.level} next = {this.goNext} prev = {this.goPrev} />
                </div>
            </div>
        );
    }
}

export default Homescreen;