import React from 'react';
import { SpinnerDotted } from 'spinners-react';
import { useParachains } from '../../polk-auction-api/ApiClient';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import './ParachainsPage.css';
import '../common/Common.css';

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
        <table className='parachain-table'>
          <tbody>
            <tr>
              <th>Parachain Id</th>
              <th>Name</th>
              <th>Lease Periods</th>
              <th>Deposit</th>
            </tr>
            {parachains.data
              ?.filter((p) => p.parachainLifeCycle === 'PARACHAIN')
              ?.sort((p, next) => p.parachainId - next.parachainId)
              ?.map((p) => {
                return (
                  <tr>
                    <td>{p.parachainId}</td>
                    <td>{p.parachainName}</td>
                    <td>
                      {p.currentLeases[0].leaseIndexPeriod +
                        ' - ' +
                        p.currentLeases[p.currentLeases.length - 1].leaseIndexPeriod}
                    </td>
                    <td>
                      {numberWithCommas(
                        Math.ceil((p.currentLeases[0].deposit as number) / (relayChain.planckDenomination! as number)),
                      )}{' '}
                      {relayChain.unit}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};
