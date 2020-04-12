import React from 'react';
import { withAuth } from '../Session'

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>The Homepage is accessible by every signed in user.</p>
  </div>
);

// Authorization conditions
// * HomePage is only protected with a broad authorization rule that checks if the authUser is not null.
const condition = authUser => !!authUser;

export default withAuth(condition)(HomePage);
