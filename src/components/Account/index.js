import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuth } from '../Session'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

// Authorization conditions
// * AccountPage is only protected with a broad authorization rule that checks if the authUser is not null.
const condition = authUser => !!authUser;

export default withAuth(condition)(AccountPage);
