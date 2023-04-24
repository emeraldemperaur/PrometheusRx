import { Component } from "react";

class PrometheusLogo extends Component{

    render(){
        return(
            
            <p  className={`${ this.props.styleName } line-1 anim-typewriter`}
            >≥Prometheus...
            </p>
        );

    }

}

export default PrometheusLogo;
