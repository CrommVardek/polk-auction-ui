import React from 'react';
import { Fund } from '../../polk-auction-api/models/Crowdloan';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import './CrowdloanPage.css';

interface CrowdloanTableProps {
  funds: Fund[] | undefined;
}

export const CrowdloanTable: (props: CrowdloanTableProps) => JSX.Element = ({ funds }) => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);
  return (
    <table className='crowdloan-table'>
      <tbody>
        <tr>
          <th>Parachain Id</th>
          <th>Name</th>
          <th>Depositor</th>
          <th>Lease Periods</th>
          <th>Raised</th>
        </tr>
        {funds
          ?.sort((f, next) => f.parachainId - next.parachainId)
          ?.map((f) => {
            return (
              <tr>
                <td>{f.parachainId}</td>
                <td>{f.parachainName}</td>
                <td>{f.fundInfo.depositor}</td>
                <td>
                  {f.fundInfo.firstPeriod}
                  {'-'}
                  {f.fundInfo.lastPeriod}
                </td>
                <td>
                  {numberWithCommas(Math.ceil(f.fundInfo.raised / (relayChain.planckDenomination! as number)))}
                  {'/'}
                  {numberWithCommas(Math.ceil(f.fundInfo.cap / (relayChain.planckDenomination! as number)))}{' '}
                  {relayChain.unit}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};