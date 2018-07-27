import React, { Component } from 'react';
import {Button, Row, Input} from 'react-materialize';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div>
        <main className="login-main">
          <div className="container">
            <div className="login-page">
              <div className="left-box">
                <div className="outer">
                  <div className="middle">
                    <div className="inner">
                      <img src='../../../public/medly_big.png'/>
                    </div>
                    <div className="inner">
                      <img src='../../../public/medly_wordmark.png'/>
                    </div>
                    <h5 className="medly-logo-text">Prescriptions Made Easy</h5>
                  </div>
                </div>
              </div>
              <div className="login-box">
                <div className="outer">
                <div className="outer">

                </div>
                </div>
              </div>
            </div>
          </div>

        </main>
        
        
        
        <div className="login-box">
        <Row>
            <Input type="email" label="Email" s={6} />
            <Input type="password" label="password" s={6} />
          </Row>
          <Button waves='light' node='a' href='/home'> SUBMIT </Button>
          <Button waves='light' node='a' href='/home'> FORGOT PASSWORD </Button>
        </div>
      </div>
    );
  }
}
<a href="/home"></a>
export default Login;
