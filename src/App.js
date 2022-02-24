import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { Person } from './components/Person/Person.jsx';
import { Icons } from './components/Icons/Icons.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Person />
      <Icons />
      <Footer />
    </div>
  );
}

export default App;
