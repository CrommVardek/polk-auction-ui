import React from 'react';
import { Fund } from '../../polk-auction-api/models/Crowdloan';
import { Parachain } from '../../polk-auction-api/models/Parachain';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import { timeStampToDateFormattedString } from '../../utils/LeasePeriodUtils';
import { PolkadotJsLinkLogo, WebsiteLinkLogo } from '../common/LogoWithLinks';
import { Tooltip } from '../common/Tooltip';
import './CrowdloanPage.css';

interface CrowdloanTableProps {
  funds: Fund[] | undefined;
}

export const CrowdloanTable: (props: CrowdloanTableProps) => JSX.Element = ({ funds }) => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);
  return (
    <table className='crowdloan-table'>
      <tbody key={'crowdloan-table'}>
        <tr key={0}>
          <th>Parachain Id</th>
          <th>Name</th>
          <th>Depositor</th>
          <th>Lease Periods</th>
          <th>Raised</th>
          <th />
          <th />
        </tr>
        {funds
          ?.sort((f, next) => f.parachainId - next.parachainId)
          ?.map((f) => {
            const startDate = timeStampToDateFormattedString(f.fundInfo.firstPeriodStartTimeStamp);
            const endDate = timeStampToDateFormattedString(f.fundInfo.lastPeriodEndTimeStamp);
            return (
              <tr key={f.parachainId}>
                <td>{f.parachainId}</td>
                <td>{f.parachainName}</td>
                <td>{f.fundInfo.depositor}</td>
                <td>
                  <Tooltip text={`(From ${startDate} to ${endDate})`}>
                    {f.fundInfo.firstPeriod}
                    {'-'}
                    {f.fundInfo.lastPeriod}
                  </Tooltip>
                </td>
                <td>
                  {numberWithCommas(Math.ceil(f.fundInfo.raised / (relayChain.planckDenomination! as number)))}
                  {'/'}
                  {numberWithCommas(Math.ceil(f.fundInfo.cap / (relayChain.planckDenomination! as number)))}{' '}
                  {relayChain.unit}
                </td>
                <td>{WebsiteLinkLogo({ website: f.website } as Parachain)}</td>
                <td>{PolkadotJsLinkLogo({ website: f.website } as Parachain)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
