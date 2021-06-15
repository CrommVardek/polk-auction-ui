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
};;

const AppWithStore: () => JSX.Element = () => {
  const initialState: Partial<RootStore> = useMemo(()=>({}), []);
  const store: Store<RootStore> = useMemo(() => rootStore(initialState), [initialState]);
  return  (
    <Provider store={store}>
      <App />
    </Provider>
  );;
};

export default AppWithStore;
