import React, { Component } from 'react';
import CardAnswer from './CardAnswer';


class Card extends Component {
    constructor(props) {
        super(props);
        this.question = props.question;
        
        this.state = {
            hideButton: true,
            displayAnswer: false,
        };

        this.displayComponenet = this.displayComponent.bind(this);
    }

    displayComponent() {
        this.setState({ displayAnswer: !this.state.displayAnswer });
        this.setState({ hideButton: !this.state.hideButton });
    }

    newLine = () => {
        const textPerLine = this.question.question.split('\n').map((str, idx) => <p className="text-line" key={idx}>{str}</p>);
        return textPerLine;
    };
 
    
    

    render() {
        
        return (
            <div className="card">
                <div className="card-content">
                    <div className="question">
                        <div><h2 className="question-h">{this.newLine()}</h2></div>
                        <p className="points">Den här frågar ger: {this.question.points} poäng</p>

                    </div>
                    {this.question.answer && (this.state.hideButton && (
                        <button className="display-answer-btn" type="button" onClick={() => this.displayComponent()} >Visa svaret</button>
                     ))

                    }

                    {this.state.displayAnswer && (<CardAnswer question={this.question} />)}
                </div>
            </div>
        );
    }

}
export default Card;