import React, { Component } from 'react';


class Epok extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
            displayEpok: false

        };

        this.displayComponent = this.displayComponent.bind(this);
      
    }
    displayComponent() {

        this.setState({ displayEpok: !this.state.displayEpok });
    }


    render() {
        return (
            <div className="strt">
                
              
                <div>
                    <button className="epok-btn" type="button" onClick={() => this.displayComponent()} >EPOKER</button>
                    
                </div>

                {this.state.displayEpok && (
                    
                    <div className = "epok-content">
                       <p> Ps dagliga aktiviteter och innersta väsen presenterade som epoker! <br/>(Skapad av en historiker som inte riktigt vet om i dag kommer i går eller om i övermorgon är samma dag. Hon är som man förstår mycket kompetent och nyskapande inom sitt område.)</p>

                        <h1>Epokerna</h1>

                        <h2>Squash-epoken  1988-1994 (?) </h2>
                        <p>
Under Squash-epoken var en omvälvande tid. P1 gick då från kulturell, musiksvår Yuppie – liksom Yuppietypiskt festade och arbetade han hårt – till att fortsätta göra precis det men med barn, och färre cigaretter och en och annan squash-match. Det var en tid som toppades vid ca 88 då P1 hade höga visioner om VPD, företaget han då startade och såg en ljus familjeframtid tillsammans med big lil sis, som på den tiden kallades Emby (från Embryot).<br/> <br/>Men mot senare delen av den här epoken kom finanskrisen och P1 var tvungen att verkligen tänka på siffror och viktiga papper i stunder, särskilt på måndagarna, och i andra, särskilt på söndagar lekte han på polishusbadet och åt filmjök till lunch.  
Och hur det nu var, varför inte VPD gick under är svårt att riktigt veta. Om det var hans målmedvetenhet, business-snille, stora tilltro till framtiden, eller om det var helt andra omständigheter som gjorde att det gick bra är inte fastbelagt.<br/><br/> Men som P1 brukar säga: “En bra målvakt ska ha tur”.  
</p>
                        <h2>Filmjölksepoken  1966-2011 </h2>
                        <p>
                            Den här perioden varade från det att P1 började äta riktig mat, till dess att hans vuxne son sa att ett högt intag av mjölkprodukter kan öka risen för prostatacancer, ca år 2011? 

                        </p>

                        <h2>Tandtrådsepoken  2004-2008? </h2>
                        <p>
                            (som av vissa hävdas ännu inte är avslutad) 
                        </p>

                        <h2>Grönt te-epoken 2007-2013? </h2>
                        <p>
                            Japan till reflux. Matcha.  
                        </p>

                        <h2>Ostepoken 2013-pågående</h2>
                        <p>
                            Opastöriserad brie som lukta faaan, itche bai, gorgonzola.   
                        </p>

                        <br/>
                        <h2>Sysse, i egenskap av P-expert, uttalar sig</h2>
                        <p>
                            Paddelmanin, han försökte ju o fortfarande försöker, ha paddlat i så många månader i rad utan avbrott som möjligt. Han var dock helt såld på att paddla förut numera är det oftast en del suckande innan, så manin har nog gått över.
 
                            <br/><br/>Kaffedrickandet. Hur många koppar o vilka dagar. Ett tag drack han inget kaffe på helger men då kände han sig för trött. Han har väl testa olika varianter under en lång tid. Till slut kom han på ”ettans princip” vilket verkar funka bra. En kopp varje dag.
 
                            <br/><br/>Likadant har det varit med vardagsfrukostarna. Han led av att han blev hungrig innan lunch. En period var det dubbla portioner gröt. Så filmjölk. När han åkte in från landet för att jobba drack han en liter i bilen. Innan han slutade jobba var det ett kokt ägg. Nu är det frukost 1 o lite senare frukost 2.

                        </p>
                        <br/><br/>

                    </div>
                )}

               

                

            </div>
        );

    }

}
export default Epok;
