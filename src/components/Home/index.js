import React from 'react';
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

// Authorization conditions
// * HomePage is only protected with a broad authorization rule that checks if the authUser is not null.
const condition = (authUser) => !!authUser;

export default compose(withEmailVerification, withAuthorization(condition))(HomePage);
