import React, { useMemo } from 'react';
import logo from './Polkadot_logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { RelayChain } from './models/Chain';
import { RootStore } from './store/PolkAuctionStore';
import { rootStore } from './store/RootStore';
import { Provider, useDispatch } from 'react-redux';
import { Store } from 'redux';
import { useEffect } from 'react';
import { selectRelayChain } from './store/application-state/ApplicationStateAction';
import { Routes } from './Routes';
import { BrowserRouter } from 'react-router-dom';

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
    } as RelayChain,
    {
      name: 'Kusama',
      unit: 'KSM',
      mainColor: '#000000',
      secondaryColor: '#ffffff',
      website: 'https://kusama.network/',
    } as RelayChain,
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectRelayChain(chains[0]));
  })

  return (
    <>
      <Header chains={chains} applicationName={'Polk-Auction'} />
      <div className='App'>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </>
  );
};;

const AppWithStore: () => JSX.Element = () => {
  const store: Store<RootStore> = useMemo(() => rootStore(), []);
  return  (
    <Provider store={store}>
      <App />
    </Provider>
  );;
};

export default AppWithStore;
