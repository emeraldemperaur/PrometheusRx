import { Component } from 'react';
import MSLogo from './components-forge/firm-badge/firm-badge-component';


import './App.css';
import PrometheusLogo from './components-forge/prometheus-logo/prometheus-logo-component';
import PrometheusTitle from './components-forge/prometheus-logo/prometheus-title-component';

class App extends Component {
 
  render(){
    return (
      <div className="App">

      <MSLogo logowidth='300' logoheight='150'/>
      <PrometheusLogo/>
      <PrometheusTitle titleSize='13px'/>
    </div>
  );
}
}

export default App;
