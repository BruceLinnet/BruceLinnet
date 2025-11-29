/*import React from 'react';
const Gallery = ({ data }) => {

    const newLine = () => {
        const  textPerLine = data.text.split('\n').map(str => <p className ="text-line">{str}</p>);
        return textPerLine;

    };

    const fillGallery = () => {
       
        const gallery = data.image.map((image, idx) =>
            <div className="img-slide">
                <div className="numbertext">1 / 4</div>
                <img className="img" src={image.img} alt={image.altText} key={idx} />
            </div>);

        
       // const gallery = <img className="img" src={data.image.img} alt={data.image.altText} />

        return gallery;
    };

    return (
        <div className="timeline-item">
            <div className="img-slide-container">
            


                
          

                {data.image && (
                    fillGallery()

                )}
              
               
                <span className="circle"></span>
            </div>
        </div>
    );

};

export default Gallery;
*/