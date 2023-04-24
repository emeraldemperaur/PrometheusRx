import { Component } from "react";
import MSLogo from "../../components-forge/firm-badge/firm-badge-component";
import PrometheusLogo from "../../components-forge/prometheus-logo/prometheus-logo-component";
import PrometheusTitle from "../../components-forge/prometheus-logo/prometheus-title-component";
import UserLoginRequest from "../../components-forge/user-login-request/user-login-request-component";
import './authentication.styles.css';

class AuthenticationUI extends Component{
    render(){
        return(
            <div className="authentication">
            <PrometheusLogo styleName='authentication-logo'/>
            <UserLoginRequest/>
            <PrometheusTitle className='authentication-prometheus-title'/>
            <MSLogo className="firm-logo" logoheight='150' logowidth='400'/>
            </div>
        );

    }

}

export default AuthenticationUI;