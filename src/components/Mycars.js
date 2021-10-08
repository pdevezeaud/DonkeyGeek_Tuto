import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {


    state = {
        voitures:[
            {name:'ford',color:'red',year:2000},
            {name:'Mercedes',color:'black;',year:2010},
            {name:'Peugeot',color:'green',year:2018}
        ],
        titre: 'Mon catalogue de Vehicules disponible'
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

    addTenYears = () => {
        const updateYear = this.state.voitures.map((param) =>{
            return param.year -= 10
        });
        
       this.setState({
        updateYear
       });
    }

    

    render(){

        const year = new Date().getFullYear();

        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.state.titre}</h1>

                {/* <p onCopy={this.noCopy}>loremUt aliqua irure ad officia.</p> */}

                <button onClick = {this.addTenYears}> + 10 ans </button>
                
                {
                    this.state.voitures.map((voiture,index) => {
                        return (
                        <div key={index}>
                             <Car nom={voiture.name} color={voiture.color} year={year - voiture.year + ' Ans'} />
                        </div>
                        )
                    })
                }
                
            </div>
        )
    }

}

export default Mycars;