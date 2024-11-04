import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SignInEmail: "",
      SignInPassword: ""
    };
  }

  onEmailChange = (e) => {
    this.setState({ SignInEmail: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ SignInPassword: e.target.value });
  };

  onSubSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.SignInEmail,
        password: this.state.SignInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user._id) { // Zmienione z user.id na user._id
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
    .catch(err => console.log('Error logging in:', err));
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="mw6 center br3 pa3 pa4-ns mv3 shadow-5 ba b--black-10">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 b fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 b dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} className="f5 link dim black db b pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
