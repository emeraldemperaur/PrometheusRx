import { Component } from "react";
import './user-login-title.styles.css';


class UserLoginTitle extends Component{
    render(){
        return(
            <p
            className="user-login-title">
                Log in to Prometheus
            </p>
        );

    }
}

export default UserLoginTitle;