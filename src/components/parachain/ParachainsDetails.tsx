import React, { useState } from 'react';
import { LeasePeriod } from '../../polk-auction-api/models/Lease';
import { Parachain } from '../../polk-auction-api/models/Parachain';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import { getMaxEndDateLeasePeriod, getMinStartDateLeasePeriod } from '../../utils/LeasePeriodUtils';
import { WebsiteLinkLogo, PolkadotJsLinkLogo } from '../common/LogoWithLinks';
import { Tooltip } from '../common/ToolTip';
import './ParachainsPage.css';
import '../common/Common.css';

interface ParachainsDetailsProps {
  parachains: Parachain[] | undefined;
}

export const ParachainsDetails: (props: ParachainsDetailsProps) => JSX.Element = ({ parachains }) => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  return (
    <table className='parachain-table'>
      <tbody>
        <tr>
          <th>Parachain Id</th>
          <th>Name</th>
          <th>Lease Periods</th>
          <th>Deposit</th>
          <th />
          <th />
        </tr>
        {parachains
          ?.filter((p) => p.parachainLifeCycle === 'PARACHAIN')
          ?.sort((p, next) => p.parachainId - next.parachainId)
          ?.map((p) => {
            const startDate = getMinStartDateLeasePeriod(
              p.currentLeases.map((l) => {
                return {
                  period: l.leaseIndexPeriod as unknown as Number,
                  startTimeStamp: l.startTimeStamp,
                } as LeasePeriod;
              }),
            );
            const endDate = getMaxEndDateLeasePeriod(
              p.currentLeases.map((l) => {
                return {
                  period: l.leaseIndexPeriod as unknown as Number,
                  endTimeStamp: l.endTimeStamp,
                } as LeasePeriod;
              }),
            );
            console.log(endDate);
            return (
              <tr>
                <td>{p.parachainId}</td>
                <td>{p.parachainName}</td>
                <td>
                  <Tooltip text={`(From ${startDate} to ${endDate})`}>
                    {p.currentLeases[0].leaseIndexPeriod +
                      ' - ' +
                      p.currentLeases[p.currentLeases.length - 1].leaseIndexPeriod}
                  </Tooltip>
                </td>
                <td>
                  {numberWithCommas(
                    Math.ceil((p.currentLeases[0].deposit as number) / (relayChain.planckDenomination! as number)),
                  )}{' '}
                  {relayChain.unit}
                </td>
                <td>
                  {WebsiteLinkLogo(p)}
                  {PolkadotJsLinkLogo(p)}
                </td>
                <td></td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
