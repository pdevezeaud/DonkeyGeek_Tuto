import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: "Mon catalogue Voitures"
}

changeTitle = (e) => {
    console.log(e);
    //on ne peut modifier un state sans passer par setstate
    
    this.setState({
      titre: "Mon nouveau titre"
    })
}



changeParamTitle = (titre) => {
  this.setState({

    titre: titre
  })
}


  render() {
    return (
      <div className="App">
        
          <Mycars title={this.state.titre} />

          <button onClick={this.changeTitle}>Changer le titre en dur</button>
          <button onClick={() => this.changeParamTitle('Titre via un param')}>Changer le titre avec param</button>

          
        
      </div>
    );

  }

  
}

export default App;
