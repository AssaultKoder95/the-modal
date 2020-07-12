import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [showModal, setModalState] = useState(false);

  const onToggle = () => {
    setModalState(!showModal);
  }
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onToggle}>
          Show logo in Modal
        </button>
        { showModal ? <Modal>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Logo in modal</p>
          <button onClick={onToggle}>Close Modal</button>
        </Modal> : null}
      </header>
    </div>
  );
}

export default App;
