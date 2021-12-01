import React, { CSSProperties, useMemo } from 'react';
import websiteLogo from '../../assets/logos/globe-website.svg';
import polkadotJsLogo from '../../assets/logos/polkadot-js.svg';
import { SpinnerDotted } from 'spinners-react';
import { useParachains } from '../../polk-auction-api/ApiClient';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { numberWithCommas } from '../../utils/DisplayUtils';
import './ParachainsPage.css';
import '../common/Common.css';
import { CustomIcon } from '../common/Icon';
import { Parachain } from '../../polk-auction-api/models/Parachain';

export const ParachainsPage = () => {
  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  const parachains = useParachains(relayChain.name);

  const iconStyle: CSSProperties = { width: '16px', height: '16px', margin: '3px' };

  const websiteLinkLogo = useMemo(
    () => (p: Parachain) =>
      p.website ? <CustomIcon logoSvg={websiteLogo} link={p.website!} style={iconStyle} /> : <></>,
    [],
  );

  const polkadotJsLinkLogo = useMemo(
    () => (p: Parachain) =>
      p.polkadotJsExplorerUrl ? (
        <CustomIcon logoSvg={polkadotJsLogo} link={p.polkadotJsExplorerUrl!} style={iconStyle} />
      ) : (
        <></>
      ),
    [],
  );

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
              <th />
              <th />
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
                    <td>{websiteLinkLogo(p)}</td>
                    <td>{polkadotJsLinkLogo(p)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};
