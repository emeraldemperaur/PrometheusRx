import { Component } from "react";

class PrometheusTitle extends Component{

    render(){
        return(
            <p
            className={`${this.props.className} prometheus-title`}
            fontSize={this.props.titleSize}>
            Big things have small beginnings
            </p>
        );

    }
}

export default PrometheusTitle;