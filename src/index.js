import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-8tle3ab6687stmbd.us.auth0.com"
        clientId="HbMCzFB70ogE1reCNSfj52uvM7SfWhex"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App/>
    </Auth0Provider>,
);
