import { Component } from 'react';
import MSLogo from './components-forge/firm-badge/firm-badge-component';


import './App.css';
import PrometheusLogo from './components-forge/prometheus-logo/prometheus-logo-component';
import PrometheusTitle from './components-forge/prometheus-logo/prometheus-title-component';
import UserLoginRequest from './components-forge/user-login-request/user-login-request-component';
import UserLoginTitle from './components-forge/user-login-request/user-login-title';

class App extends Component {
 
  render(){
    return (
      <div className="App">

      <MSLogo logowidth='300' logoheight='150'/>
      <PrometheusLogo/>
      <PrometheusTitle titleSize='13px'/>
      <UserLoginRequest/>
    </div>
  );
}
}

export default App;
