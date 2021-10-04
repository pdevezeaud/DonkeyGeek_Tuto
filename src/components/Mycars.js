import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {


    state = {
        voitures:[
            {name:'ford',color:'red',year:2000},
            {name:'Mercedes',color:'blac;',year:2010},
            {name:'Peugeot',color:'green',year:2018}
        ]
    }

    // noCopy = () => {
    //     alert("Merci de ne pas copier le texte")
    // };

    // addStyle = (e) => {
    //     if(e.target.classList.contains('styled')){
    //         e.target.classList.remove('styled');
    //     }else {
    //         e.target.classList.add('styled');
    //     }
    // }

    

    render(){

        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

                {/* <p onCopy={this.noCopy}>loremUt aliqua irure ad officia.</p> */}
                
                <Car year={"2000"} color="green">Peugeot</Car>
                <Car color="bleu">Renault</Car>
                <Car color="black"></Car>
            </div>
        )
    }

}

export default Mycars;