import React, {useState} from 'react';
/*import timelineData from '../data';*/
import TimelineItem from './TimelineItem';
import Gallery from './Gallery';

const TimelineSection = (props) => {
    const [open, setOpen] = useState(false);
    const openSection = () => { /*byt namn på funk*/
        setOpen((prev) => !prev);
    };

    const sortByDate = () => {
       props.data.sort((a,b) => parseInt(a.date) - parseInt(b.date));
    };

    sortByDate();
    
/*vid klick-> om useState open är false, sätt till true och öppna. Så länge som open är false skrivs inga items ut, men sektionen, t.ex. 1960, visas fortfarande. Utan items/poster dock. */
    return (
        <section className="section" style={{ background: props.color }}>
            <button className="sectionBtn" type="button" onClick={openSection} style={{ background: props.color }}> <h1 className="section-heading">{props.title}</h1></button>

            {open && (props.data.map((data, idx) => (
                < TimelineItem data={data} key={idx} />
                //< Gallery data={data} key={idx} />
               
            )
            ))
               
            }


            <button className="section-hide-btn" type="button" onClick={openSection} style={{ background: props.color }}>STÄNG</button>
           
        </section>
        
    );
};

export default TimelineSection;
