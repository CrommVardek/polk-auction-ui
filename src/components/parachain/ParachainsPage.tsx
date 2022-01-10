import React from 'react';
import { SpinnerDotted } from 'spinners-react';
import { useParachains } from '../../polk-auction-api/ApiClient';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import '../common/Common.css';
import { ParachainsDetails } from './ParachainsDetails';
import './ParachainsPage.css';

export const ParachainsPage = () => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  const parachains = useParachains(relayChain.name);

  return (
    <div className='parachain-page'>
      {parachains.loading ? (
        <div className='spinner-loading'>
          <SpinnerDotted color='#eee' />
        </div>
      ) : (
        <ParachainsDetails parachains={parachains.data} />
      )}
    </div>
  );
};
