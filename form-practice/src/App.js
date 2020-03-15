import React from 'react';
import ContactPage from './components/ContactPage.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactPage/>
      </header>
    </div>
  );
}

export default App;
