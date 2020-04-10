import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { GlobalStyle } from './styles/global'
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';

const GlobalStyleContainer = styled(React.StrictMode)`
  ${GlobalStyle}
`

ReactDOM.render(
  <GlobalStyleContainer>
    <App />
  </GlobalStyleContainer>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
