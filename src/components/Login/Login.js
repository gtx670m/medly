
import React, { Component } from 'react';
import {Button, Row, Input} from 'react-materialize';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="body-fix">
        <main className="login-main">
          <div className="container">
            <div className="login-page">
              <div className="left-box valign-wrapper" style={{backgroundColor: '#56CCB1', backgroundImage: 'url("/assets/background_login-9386dac4cc9341f3613054cef72d0fa76fe21efe11b7bc651f55d66187808022.png")'}}>
                <div className="outer">
                  <div className="middle">
                    <div className="inner">
                      <img src='../../../public/medly_big.png' className="circle" />
                    </div>
                    <div className="inner">
                      <img src="../../../public/medly_wordmark.png" id="medly-text-logo" />
                    </div>
                    <h5 className="medly-logo-text">Prescriptions Made Easy</h5>
                  </div>
                </div>
              </div>
              <div className="login-box">
                <div className="outer">
                  <div className="middle">
                    <div className="inner">
                      <div className="card">
                        <div className="card-content">
                          <div className="center-align">
                            <div className="center">
                              <h3>LOGIN</h3>
                            </div>
                          </div>
                          <div className="row">
                            <form className="col s12" id="login_form" action="#/home" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" defaultValue="✓" /><input type="hidden" name="authenticity_token" defaultValue="n5EUHD4ClNN3wQAcrtjLPXWXtEt9cm+JR02LMpZ3pHmdKJnAM4BqF4FAnibsXLCqlsIeRTWgloqY4lstgIWdLg==" />
                              <div className="input-field col s12">
                                <input type="text" name="email" id="email" />
                                <label className="validate" autoComplete="off" htmlFor="email">Email</label>
                              </div>
                              <div className="input-field col s12" id="password-box">
                                <input type="password" name="password" id="password" />
                                <label className="validate" autoComplete="off" htmlFor="password">Password</label>
                              </div>
                              <input type="submit" style={{display: 'none'}} />{/* to submit with Enter key */}
                            </form>                </div>
                        </div>
                        <div className="card-action">
                          <a href="#" onclick="document.getElementById('login_form').submit(); return false;" className="waves-effect waves-light btn">Submit</a>
                          <a href="#" onclick="redirectTo('http://devaccounts.medlypharmacy.com/password_reset');" className="right grey-text text-lighten">Forgot
                            Password</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copy-right">
                <h5 className="copy-right-text">© 2017 Lindenwood Health, Inc</h5>
              </div>
            </div>
          </div>
        </main>
</div>
   
    );
  }
}
<a href="/home"></a>
export default Login;
