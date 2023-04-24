import { Component } from 'react';
import MSLogo from './components-forge/firm-badge/firm-badge-component';


import './App.css';

import AuthenticationUI from './routes/authentication/authentication-component';

class App extends Component {
 
  render(){
    return (
      <div className="App">
        <AuthenticationUI/>
      </div>
  );
}
}

export default App;
