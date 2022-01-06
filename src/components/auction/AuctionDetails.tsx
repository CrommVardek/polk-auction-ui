import React, { useMemo } from 'react';
import { Auction } from '../../polk-auction-api/models/Auction';
import { LeasePeriod } from '../../polk-auction-api/models/Lease';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import { useMaxEndDateLeasePeriod, useMinStartDateLeasePeriod } from '../../utils/Hooks';
import './AuctionPage.css';

interface AuctionDetailsProps {
  auction: Auction | undefined;
}

export const AuctionDetails: (props: AuctionDetailsProps) => JSX.Element = ({ auction }) => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  return (
    <div className='auction-details'>
      {auction === undefined || auction.phase === 'NO_ONGOING_AUCTION' ? (
        <div className='auction-no-ongoing-auction'>
          <p>There is currently no ongoing auction at the moment</p>
        </div>
      ) : (
        <>
          {auction?.currentWinning?.forEach((e) => console.log(e))}
          <div className='auction-summary'>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Begin End height: '}</div>
              <div className='auction-summary-item-container'>{auction?.beginEnd}</div>
            </div>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Finish End height: '}</div>
              <div className='auction-summary-item-container'>{auction?.finishEnd}</div>
            </div>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Lease periods: '}</div>
              <div className='auction-summary-item-container'>
                [{auction?.leasePeriods.map((lp) => lp.period).join(', ')}]{' '}
                {`(From ${useMinStartDateLeasePeriod(auction?.leasePeriods)} to ${useMaxEndDateLeasePeriod(
                  auction?.leasePeriods,
                )} )`}
              </div>
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
              {auction?.currentWinning
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
