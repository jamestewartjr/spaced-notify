import React from 'react';
import {Header} from './components/layout/Header'
import {Content} from './components/layout/Content'
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Header/>
      <Content/>
    </header>
  </div>
  );
}

export default App;
