import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome home {user.username}!</h1>
          <button onClick={signOut}>Sign Out</button>
        </header>
      )}
    </Authenticator>
  );
}

export default App;