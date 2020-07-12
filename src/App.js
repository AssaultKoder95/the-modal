import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
  }
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={toggleModalState}>
          Show logo in Modal
        </button>
        { modalState ? 
        <Modal>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Logo in modal</p>
          <button onClick={toggleModalState}>Close Modal</button>
        </Modal>
        : null }
      </header>
    </div>
  );
}

export default App;
