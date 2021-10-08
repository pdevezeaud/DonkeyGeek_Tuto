import React from "react";


const Car = ({color, nom,year}) => {

    //si nous avons colors nous aurons quelque chose sinon on retournera Neant
    const colorInfo = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);
    
    if (nom) {
        return (
        <div className="cars">
        <p>Marque: { nom }</p>
        <p>Age du vehicule: {year}</p>
        { colorInfo}
        
        </div>
    )
}else{
    
    return null;
    // ( 
    
    //     <div className="cars">
    //         <p>Pa de data disponible</p>
    //     </div>
    // ) 
}
    
}

export default Car

