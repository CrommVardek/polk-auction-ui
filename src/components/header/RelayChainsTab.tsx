import React, { useCallback } from 'react';
import { RelayChain } from '../../models/Chain';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';

interface RelayChainsTabProps {
  chains: RelayChain[];
}

export const RelayChainsTab: (props: RelayChainsTabProps) => JSX.Element = ({ chains }: RelayChainsTabProps) => {
  const currentRelayChain = PolkAuctionStore.useState(selectRelayChain);

  const switchChain = useCallback(
    (chainName) => {
      const chain = chains.find((c) => c.name === chainName);
      if (chain !== undefined)
        PolkAuctionStore.update((s) => {
          s.currentRelayChain = chain;
        });
    },
    [chains],
  );
  return (
    <div
      style={{ backgroundColor: currentRelayChain.mainColor, color: currentRelayChain.secondaryColor }}
      className='polkauction-header'
    >
      <nav>
        <div className='relay-chains-tab'>
          {chains.map((c) => (
            <button id={c.name} onClick={(e) => switchChain(c.name)}>
              <span
                style={{
                  backgroundColor: currentRelayChain.name === c.name ? '#ccc' : currentRelayChain.mainColor,
                  color: currentRelayChain.secondaryColor,
                }}
              >
                <h3>{c.name}</h3>
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
