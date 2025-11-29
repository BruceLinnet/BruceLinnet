import React, { Component } from 'react';


class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
            displayInfo: false

        };

        this.displayComponent = this.displayComponent.bind(this);
      
    }
    displayComponent() {

        this.setState({ displayInfo: !this.state.displayInfo });
    }


    render() {
        return (
           
                
              
                <div className="info-container">
                    <button className="info-btn" type="button" onClick={() => this.displayComponent()} >Spelinfo</button>
                    {this.state.displayInfo && (

                        <div className="epok-content">


                        </div>
                    )}
                </div>

                

               

                

            
        );

    }

}
export default Info;
