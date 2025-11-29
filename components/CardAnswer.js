import React, { Component } from 'react';
import CardContainer from './CardContainer';

const CardAnswer = ({ question}) => {
    const newLine = () => {
        const textPerLine = question.answer.split('\n').map((str, idx) => <p className="text-line" key={idx}>{str}</p>);
        return textPerLine;
    };

    
/*vid klick-> om useState open är false, sätt till true och öppna. Så länge som open är false skrivs inga items ut, men sektionen, t.ex. 1960, visas fortfarande. Utan items/poster dock. */
    return (
        <div>
            <div style={{ background: "white" }}> Svar:</div>
            <div className="answer" >
                {newLine()}
                {question.img && (
                    <img className="img" src={question.img} alt={question.altText} />   
                )}
                {question.imgText && (
                    <h5>{ question.imgText }</h5>
                )}
                <p>Från {question.author}</p>
            </div>
        </div>
    );
};

export default CardAnswer;

