import React, { Component } from 'react';
import questions from '../game/questions';
import questionsS from '../game/questionsS';
import questionsA from '../game/questionsA';
import Card from './Card';




class CardContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
                       points: 0,
                       displayFCard: false,
                       displaySCard: false,
                       displayACard: false,
                       displayPCard: false,
                       displayASCard: false
       
        };

        this.displayComponent = this.displayComponent.bind(this);
    }
   
    displayComponent(component) {
        switch (component) {
            case "fCard":
                this.hideAll();
                this.setState({ displayFCard: !this.state.displayFCard });
                break;
            case "sCard":
                this.hideAll();
                this.setState({ displaySCard: !this.state.displaySCard });
                break;
            case "aCard":
                this.hideAll();
                this.setState({ displayACard: !this.state.displayACard });
                break;
            case "pCard":
                this.hideAll();
                this.setState({ displayPCard: !this.state.displayPCard });
                break;
            case "asCard":
                this.hideAll();
                this.setState({ displayASCard: !this.state.displayASCard });
                break;
            case "points":
                this.setState({ points: this.state.points + parseInt(1) });
                this.hideAll();
                break;
        }
    }

    hideAll() {
        this.setState({ displayFCard: false });
        this.setState({ displaySCard: false });
        this.setState({ displayACard: false });
        this.setState({ displayPCard: false });
        this.setState({ displayASCard: false });
    }

    randomQuestion= (questionsX) => {
        let randomQuestion = questionsX.sort(() => 0.5 - Math.random()).slice(0, 1);
        this.removeQuestion(randomQuestion); 
        return randomQuestion;
    }
 
    updatePoints() {
        //this.displayComponent('points');
    }
    
    
    removeQuestion = (questionX) => {
        if (this.state.displayFCard) { 
            if (questions.length > 0) {
                let i;
                for (i in questions) {
                    if (questions[i].qId === questionX[0].qId) {
                        console.log(i);
                        if (i > -1) {
                            questions.splice(i, 1);
                        }

                    }

                }
                console.log(questions);
            } else {

            }  
        } else if (this.state.displaySCard)
            if (questionsS.length > 0) {
                let i;
                for (i in questionsS) {
                    if (questionsS[i].qId === questionX[0].qId) {
                        console.log(i);
                        if (i > -1) {
                            questionsS.splice(i, 1);
                        }
                    }
                }
                console.log(questions);
            } else {

            }  
    }

    render() {
        return (
            <div className="bgc">
                <div className="card-container">
                  
                <p>Poäng:{this.state.points}</p>
                <div className="card-btn-container">
                    <button className="card-btn" type="button" onClick={() => this.displayComponent('fCard')} >Fråga</button>
                    <button className="card-btn" type="button" onClick={() => this.displayComponent('sCard')} >Slumpen</button>
                    <button className="card-btn" type="button" onClick={() => this.displayComponent('aCard')} >Aktivitet</button>
                  
                </div>

                {this.state.displayFCard && (this.randomQuestion(questions).map((questions, idx) => (
                    < Card question={questions} key={idx} />
                  
                )
                ))}

                
                
                {this.state.displaySCard && (this.randomQuestion(questionsS).map((questions, idx) => (
                    < Card question={questions} key={idx} />
                )
                ))}

                {this.state.displayACard && (this.randomQuestion(questionsA).map((questions, idx) => (
                    < Card question={questions} key={idx} />    
                ) 
                ))}
             
          
            
           
                <p>Fick du något poäng?</p>
                <div className="card-btn-container">
                    
                    <button className="answer-btn" style={{ background: "darkseagreen" }} onClick={() => this.displayComponent('points')}>Ja!</button>
                    <button className="answer-btn" style={{ background: "lightsalmon" }} onClick={() => this.hideAll()}>Nej</button>
                      
                </div>

            </div>
        </div>
        );

    }

}
export default CardContainer;
