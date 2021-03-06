import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './App';
import { AboutPage } from './components/about/AboutPage';
import { AuctionPage } from './components/auction/AuctionPage';
import { CrowdloanPage } from './components/crowdloan/CrowdloanPage';
import { ParachainsPage } from './components/parachain/ParachainsPage';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/about' component={AboutPage} />
      <Route path='/auction' component={AuctionPage} />
      <Route path='/crowdloan' component={CrowdloanPage} />
      <Route path='/parachain' component={ParachainsPage} />
      <Route component={HomePage} />
    </Switch>
  );
};
