import React, { useCallback, useMemo } from 'react';
import { RelayChain } from '../../models/Chain';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';

interface RelayChainButtonProps {
  chain: RelayChain;
  onClick: (chainName: string) => void;
}

interface RelayChainsTabProps {
  chains: RelayChain[];
}

export const RelayChainButton: (props: RelayChainButtonProps) => JSX.Element = ({
  chain,
  onClick,
}: RelayChainButtonProps) => {
  const currentRelayChain = PolkAuctionStore.useState(selectRelayChain);

  const buttonClassName = useMemo(() => {
    return currentRelayChain.name.toLowerCase() === chain.name.toLowerCase() ? 'active' : 'not-active';
  }, [currentRelayChain, chain.name]);

  return (
    <button className={buttonClassName} id={chain.name} onClick={() => onClick(chain.name)}>
      <span
        style={{
          backgroundColor: currentRelayChain.name === chain.name ? '#ccc' : currentRelayChain.mainColor,
          color: currentRelayChain.secondaryColor,
        }}
      >
        <h3>{chain.name}</h3>
      </span>
    </button>
  );
};

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
          {chains.map((c, index) => (
            <RelayChainButton chain={c} onClick={switchChain} key={index} />
          ))}
        </div>
      </nav>
    </div>
  );
};
