import { SpinnerDotted } from 'spinners-react';
import { useParachains } from '../../polk-auction-api/ApiClient';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
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
        <table className='parachain-table'>
          <tbody>
            <tr>
              <th>Parachain Id</th>
              <th>Name</th>
              <th>Lease Periods</th>
              <th>Deposit</th>
            </tr>
            {parachains.data
              ?.filter((p) => p.parachain.parachainLifeCycle === 'PARACHAIN')
              ?.sort((p, next) => p.parachain.paraId - next.parachain.paraId)
              ?.map((p) => {
                return (
                  <tr>
                    <td>{p.parachain.paraId}</td>
                    <td>{p.parachainName}</td>
                    <td>
                      {p.parachain.currentLeases[0].leaseIndexPeriod +
                        ' - ' +
                        p.parachain.currentLeases[p.parachain.currentLeases.length - 1].leaseIndexPeriod}
                    </td>
                    <td>
                      {numberWithCommas(
                        Math.ceil(
                          (p.parachain.currentLeases[0].deposit as number) / (relayChain.planckDenomination! as number),
                        ),
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
