import React from 'react';
import { SpinnerDotted } from 'spinners-react';
import { useAuctions } from '../../polk-auction-api/ApiClient';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import '../common/Common.css';
import './AuctionPage.css';

export const AuctionPage = () => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  //TODO
  const auctions = useAuctions(relayChain.name);
  return (
    <div className='auction-page'>
      {auctions.loading ? (
        <div className='spinner-loading'>
          <SpinnerDotted color='#eee' />
        </div>
      ) : (
        <>
          {auctions.data?.currentWinning?.forEach((e) => console.log(e))}
          <div className='auction-summary'>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Begin End height: '}</div>
              <div className='auction-summary-item-container'>{auctions.data?.beginEnd}</div>
            </div>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Finish End height: '}</div>
              <div className='auction-summary-item-container'>{auctions.data?.finishEnd}</div>
            </div>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Lease periods: '}</div>
              <div className='auction-summary-item-container'>{auctions.data?.leasePeriods.join(', ')}</div>
            </div>
          </div>
          <table className='auction-table'>
            <tbody>
              <tr>
                <th>Parachain Id</th>
                <th>Name</th>
                <th>Lease Periods</th>
                <th>Raised</th>
              </tr>
              {auctions.data?.currentWinning
                ?.filter((w) => w.bid !== null && w.bid!.parachainId !== null)
                ?.sort((w, next) => w.bid!.parachainId! - next.bid!.parachainId!)
                ?.map((w) => {
                  return (
                    <tr>
                      <td>{w.bid?.parachainId!}</td>
                      <td>{w.bid?.parachainName ?? ''}</td>
                      <td>{w.leases?.join(', ') ?? ''}</td>
                      <td>
                        {numberWithCommas(Math.ceil((w.bid?.amount ?? 0) / (relayChain.planckDenomination! as number)))}{' '}
                        {relayChain.unit}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
