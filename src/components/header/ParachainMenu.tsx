import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './ParachainMenu.css';

export const ParachainMenu = () => {
  const history = useHistory();

  const SwitchPage = useCallback(
    (route: string) => {
      history.push('/' + route);
    },
    [history],
  );

  return (
    <div className='parachain-menu-actions-container'>
      <div className='parachain-menu-actions'>
        <button onClick={() => SwitchPage('parachain')}>
          <span>Parachains</span>
        </button>
        <button onClick={() => SwitchPage('crowdloan')}>
          <span>Crowdloans</span>
        </button>
        <button onClick={() => SwitchPage('auction')}>
          <span>Auction</span>
        </button>
      </div>
    </div>
  );
};
