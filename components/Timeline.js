import React, { useState } from 'react';
import timelineData from '../data';

/*hämta data i dokument per personer, dela upp inlägg per date.year*/

import TimelineSection from './TimelineSection';


const Timeline = () => {
    //const [pageTop, setTop] = useState(false);
    const toTop  = () => { /*byt namn på funk*/
        //setTop((prev) => !prev);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        //setTop((prev) => !prev);
    };

    const fillData = () => { /*byt namn på funk*/
        let i = 0;
        for (i in timelineData) {
            if (timelineData[i].decade === "1960") {
                console.log("Hej!");  
            }
        }
    };

    const filterByDecade = (decade) => {
        let byDecade = timelineData.filter(it => it.decade.includes(decade));
        console.log(byDecade);
        return byDecade;  
    };

    //fillData();
   

    return (
        <div className="timeline-container">

            <TimelineSection data={filterByDecade("1960")} title={"1960"} color={"darkseagreen"} />
           
            <TimelineSection data={filterByDecade("1970")} title={"1970"} color={"salmon"} />

            <TimelineSection data={filterByDecade("1980")} title={"1980"} color={"gold"} />
            <TimelineSection data={filterByDecade("1990")} title={"1990"} color={"mediumpurple"} />

            <TimelineSection data={filterByDecade("2000")} title={"2000"} color={"darkseagreen"} />
            <TimelineSection data={filterByDecade("2010")} title={"2010"} color={"salmon"} />
            <TimelineSection data={filterByDecade("2020")} title={"2020"} color={"gold"} />

            <button className="top-btn" type="button" onClick={toTop}>TOPP</button>
           
        </div>
       
    );
};
  
export default Timeline;



        
