import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';  // Ensure this path is correct
import { Auth0Provider } from '@auth0/auth0-react';
import './components/i18n';
import { ThemeProvider } from './components/ThemeContext'; 

ReactDOM.render(
    
    <Auth0Provider
    domain="dev-6pjyaau05ak1mwpu.us.auth0.com"
    clientId="vkVU9UmNnyWXmopMDK9oQG8BX2VpGnGY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <ThemeProvider>
    <Router>
      <App />
    </Router>
    </ThemeProvider>
    </Auth0Provider>,
  document.getElementById('root')
);