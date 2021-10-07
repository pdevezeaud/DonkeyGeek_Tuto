import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {


    state = {
        voitures:[
            {name:'ford',color:'red',year:2000},
            {name:'Mercedes',color:'black;',year:2010},
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

                <button> + 10 ans </button>
                
                <Car color={this.state.voitures[0].color} year ={this.state.voitures[0].year}>{this.state.voitures[0].name}</Car>
                <Car color={this.state.voitures[1].color} year ={this.state.voitures[1].year}>{this.state.voitures[1].name}</Car>
                <Car color={this.state.voitures[2].color} year ={this.state.voitures[2].year}>{this.state.voitures[2].name}</Car>
            </div>
        )
    }

}

export default Mycars;