import React from 'react';
const TimelineItem = ({ data }) => {

    const newLine = () => {
        const  textPerLine = data.text.split('\n').map(str => <p className ="text-line">{str}</p>);
        return textPerLine;
    };

    const fillGallery = () => {
       
        const gallery = data.image.map((image, idx) => <img className="img" src={image.img} alt={image.altText} key={idx} />);

        
       // const gallery = <img className="img" src={data.image.img} alt={data.image.altText} />

        return gallery;
    };

    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.date}
                </span>

                
                <p className ="heading">{data.heading}</p>
                
                <div>{newLine()}</div>
                {data.image && (
                    fillGallery()

                )}
                {data.author && (
                    <p>Från {data.author}</p>

                )}
               
                <span className="circle"></span>
            </div>
        </div>
    );

};

export default TimelineItem;
