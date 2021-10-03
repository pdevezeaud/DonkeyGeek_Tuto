import React from "react";


const Car = ({children, color}) => {

    //si nous avons colors nous aurons quelque chose sinon on retournera Neant
    const colorInfo = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);
    
    if (children) {
        return (
        <div className="cars">
        <p>Marque: { children }</p>
        { colorInfo}
        
        </div>
    )
}else{
    
    return(
      
        <div className="cars">
            <p>Pa de data disponible</p>
        </div>
    ) 
}
    
    
    
    
    

}

export default Car

