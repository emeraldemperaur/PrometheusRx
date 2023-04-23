import { Component } from "react";

class MSLogo extends Component{
    
    render(){
        return(
            <a
            href="https://www.morganstanley.com/"
            target="_blank" rel="noreferrer">
            <img
            className={`ms-logo ${this.props.className}`}
            width={this.props.logowidth}
            height={this.props.logoheight}
            alt='MSAW Logo'
            src="https://media-s3-us-east-1.ceros.com/dan-scully-jr/images/2020/07/13/7e84b1f84fa02f64ced7bc2683ded611/msaw-master-logo-suite-rgb-r6-msaw-h-k.png"
            />
            </a>
        );

    }
}

export default MSLogo;