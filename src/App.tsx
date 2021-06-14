import React from 'react';
import logo from './Polkadot_logo.svg';
import './App.css';
import { Header } from './components/Header';
import { RelayChain } from './models/Chain';

function App() {

  const chains = [
    {
      name: 'Kusama',
      unit: 'KSM',
      mainColor: '#000000',
      secondaryColor: '#ffffff',
      website: 'https://kusama.network/',
    } as RelayChain,
    {
      name: 'Polkadot',
      unit: 'DOT',
      mainColor: '#e6007a',
      secondaryColor: '#ffffff',
      website: 'https://polkadot.network/',
    } as RelayChain,
  ];

  return (
    <>
      <Header chains={chains} applicationName={'Polk-Auction'} />
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
