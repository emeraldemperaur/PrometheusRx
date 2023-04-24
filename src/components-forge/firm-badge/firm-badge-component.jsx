import { Component } from "react";
import './firm-badge.styles.css';


class MSLogo extends Component{
    
    render(){
        return(
            <a
            href="https://www.morganstanley.com/"
            target="_blank" rel="noreferrer">
            <img
            className={`${this.props.className}`}
            width={this.props.logowidth}
            height={this.props.logoheight}
            alt='MSAW Logo'
            src="./msaw-master-logo-white.png"
            />
            </a>
        );

    }
}

export default MSLogo;