import React from 'react';
import Timeline from './components/Timeline';
import CardContainer from './components/CardContainer';
import Epok from './components/Epok';
import './App.css';


function App() {
    return (
        <div className="App">
            <div className="strt">
                <Epok />
            </div>
            <header><h1>VAD ÄR POÄNGEN?</h1></header>
        
            <CardContainer />

            <div className="timeline-h">
                <h2>Är spelet för svårt?</h2>
                <h3>Här kommer facit!</h3>
            </div>

            <Timeline />

        </div>
        
  );
}

export default App;
