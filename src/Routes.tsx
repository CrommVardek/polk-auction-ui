import { Switch, Route } from 'react-router-dom';
import { HomePage } from './App';
import { ParachainsPage } from './components/parachain/ParachainsPage';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/parachain' component={ParachainsPage} />
      <Route component={HomePage} />
    </Switch>
  );
};
