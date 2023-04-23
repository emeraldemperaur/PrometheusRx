import { Component } from "react";
import './user-login-request.styles.css';
import UserLoginTitle from "./user-login-title";


class UserLoginRequest extends Component{
    render(){
        return(
            <div  className="container">
  <div margin-top="133px" className="box"></div>
  <div className="container-forms">
    <div className="container-info">
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Have a QiD account?
            </p>
            <div className="btn">
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Need a QiD account? 
            </p>
            <div className="btn">
              Request
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-form">
    <div margin-top='33px'><br/><br/><UserLoginTitle/><br/><br/></div>

      <div className="form-item log-in">
        <div className="table">
          <div className="table-cell">

            <input name="Username" placeholder="Username" type="text" maxLength="33"/>
            <input name="Password" placeholder="Password" type="Password" maxLength="33"/>
            <div className="btn">
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="form-item sign-up">
        <div className="table">
          <div className="table-cell">
            <input name="email" placeholder="Morgan Stanley Email" type="text" maxLength="69"/>
            <input name="fullName" placeholder="Full Name" type="text" maxLength="33"/>
            <input name="Username" placeholder="Morgan Stanley ID" type="text" maxLength="6"/>
            <input name="Password" placeholder="Password" type="Password" maxLength="18"/>
            <div className="btn">
              Request
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        );

    }

}

export default UserLoginRequest;