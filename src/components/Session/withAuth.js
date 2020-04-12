import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import AuthUserContext from './context'

const withAuth = condtion => Component => {
  class WithAuth extends React.Component {
    constructor(props) {
      super(props)

      this.state = { authUser: null }
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condtion(authUser)) {
          this.props.history.push(ROUTES.SIGN_IN);
        }
      })
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => condition(authUser) ? <Component {...this.props} /> : null}
        </AuthUserContext.Consumer>
      )
    }
  }
  return compose(withRouter, withFirebase)(WithAuth);
}

export default withAuth