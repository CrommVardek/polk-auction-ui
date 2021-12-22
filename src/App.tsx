import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/header/Header';
import { RelayChain } from './models/Chain';
import logo from './assets/logos/polkadot-logo-white.svg';
import { Routes } from './Routes';
import { PolkAuctionStore } from './store/PolkAuctionStore';

export const HomePage = () => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
    </header>
  );
};

const App = () => {
  const chains = [
    {
      name: 'Polkadot',
      unit: 'DOT',
      mainColor: '#e6007a',
      secondaryColor: '#ffffff',
      website: 'https://polkadot.network/',
      planckDenomination: 10_000_000_000,
    } as RelayChain,
    {
      name: 'Kusama',
      unit: 'KSM',
      mainColor: '#000000',
      secondaryColor: '#ffffff',
      website: 'https://kusama.network/',
      planckDenomination: 1_000_000_000_000,
    } as RelayChain,
  ];

  useEffect(() => {
    PolkAuctionStore.update((s) => {
      s.currentRelayChain = chains[1];
    });
  });

  return (
    <>
      <BrowserRouter>
        <Header chains={chains} applicationName={'PolkAuction'} />
        <div className='App'>
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
