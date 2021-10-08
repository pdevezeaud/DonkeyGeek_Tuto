import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    
}

// changeTitle = (e) => {
//     //console.log(e);
//     //on ne peut modifier un state sans passer par setstate
    
//     this.setState({
//       titre: "Mon nouveau titre"
//     })
// }



// changeParamTitle = (titre) => {
//   this.setState({

//     titre: titre
//   })
// }

// changeViaBind = (param) => {
//   this.setState({
//     titre:param
//   })
// }


// changeViaInput = (e) => {
  
//   this.setState({
//     titre: e.target.value
//   })
// }



  render() {
    return (
      <div className="App">
        
          <Mycars title={this.state.titre} />

          {/* <button onClick={this.changeTitle}>Changer le titre en dur</button>
          <button onClick={() => this.changeParamTitle('Titre via un param')}>Changer le titre avec param</button>
          <button onClick={this.changeViaBind.bind(this, 'Titre avec Bind')}>Changer le titre avec Bind</button>
          <input type="text" onChange={this.changeViaInput} value={this.state.titre} />    */}
      </div>
    );

  }

  
}

export default App;
