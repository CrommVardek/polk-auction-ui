import React from 'react';
import { SpinnerDotted } from 'spinners-react';
import { useAuctions as useAuction } from '../../polk-auction-api/ApiClient';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import '../common/Common.css';
import { AuctionDetails } from './AuctionDetails';
import './AuctionPage.css';

export const AuctionPage = () => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  const auction = useAuction(relayChain.name);

  return (
    <div className='auction-page'>
      {auction.loading ? (
        <div className='spinner-loading'>
          <SpinnerDotted color='#eee' />
        </div>
      ) : (
        <AuctionDetails auction={auction.data} />
      )}
    </div>
  );
};
