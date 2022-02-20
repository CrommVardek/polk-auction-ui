import React from 'react';
import { SpinnerDotted } from 'spinners-react';
import { useCrowdloans } from '../../polk-auction-api/ApiClient';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import './CrowdloanPage.css';
import '../common/Common.css';
import { CrowdloanTable } from './CrowdloanTable';

export const CrowdloanPage = () => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  const crowdloans = useCrowdloans(relayChain.name);

  return (
    <div className='crowdloan-page'>
      {crowdloans.loading ? (
        <div className='spinner-loading'>
          <SpinnerDotted color='#eee' />
        </div>
      ) : (
        <>
          <h3>Current</h3>
          <CrowdloanTable funds={crowdloans.data?.funds.filter((f) => f.fundInfo.state === 'CURRENT')} />
          <br />
          <h3>Ended</h3>
          <CrowdloanTable funds={crowdloans.data?.funds.filter((f) => f.fundInfo.state === 'ENDED')} />
        </>
      )}
    </div>
  );
};
