import React, { useMemo } from 'react';
import { SpinnerDotted } from 'spinners-react';
import { useAuctions as useAuction } from '../../polk-auction-api/ApiClient';
import { Auction } from '../../polk-auction-api/models/Auction';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import '../common/Common.css';
import './AuctionPage.css';

export const AuctionPage = () => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  const auction = useAuction(relayChain.name);

  const useMinStartDateLeasePeriod = useMemo(() => {
    if (auction?.data?.leasePeriods !== undefined) {
      const timeStamp = auction.data?.leasePeriods.reduce((prev, curr) =>
        prev.startTimeStamp! < curr.startTimeStamp! ? prev : curr,
      ).startTimeStamp;
      return new Date(timeStamp! as number).toUTCString();
    }
    return '';
  }, [auction]);

  const useMaxEndDateLeasePeriod = useMemo(() => {
    if (auction.data?.leasePeriods !== undefined) {
      const timeStamp = auction.data?.leasePeriods.reduce((prev, curr) =>
        prev.endTimeStamp! > curr.endTimeStamp! ? prev : curr,
      ).endTimeStamp;
      return new Date(timeStamp! as number).toUTCString();
    }
    return '';
  }, [auction]);

  //TODO
  return (
    <div className='auction-page'>
      {auction.loading ? (
        <div className='spinner-loading'>
          <SpinnerDotted color='#eee' />
        </div>
      ) : (
        <>
          {auction.data?.currentWinning?.forEach((e) => console.log(e))}
          <div className='auction-summary'>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Begin End height: '}</div>
              <div className='auction-summary-item-container'>{auction.data?.beginEnd}</div>
            </div>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Finish End height: '}</div>
              <div className='auction-summary-item-container'>{auction.data?.finishEnd}</div>
            </div>
            <div className='auction-summary-item-container'>
              <div className='auction-summary-item-container'>{'Lease periods: '}</div>
              <div className='auction-summary-item-container'>
                [{auction.data?.leasePeriods.map((lp) => lp.period).join(', ')}]{' '}
                {`(From ${useMinStartDateLeasePeriod} to ${useMaxEndDateLeasePeriod} )`}
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
              {auction.data?.currentWinning
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
