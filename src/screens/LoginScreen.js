import React, {Component} from 'react';

import Login from '../components/login/Login';

class LoginScreen extends Component {
  render() {
    return <Login navigation={this.props.navigation} />;
  }
}

export default LoginScreen;
