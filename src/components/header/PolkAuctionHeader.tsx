import React from 'react';
import githubLogo from '../../github_logo.svg';
import kusamaLogo from '../../Kusama_Logo_white.svg';
import polkadotLogo from '../../Polkadot_logo.svg';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
import { CustomIcon } from '../common/Icon';

interface RelayChainIconProps {
  relayChainName: string;
  website: string;
}

interface PolkAuctionHeaderProps {
  applicationName: string;
}

const GithubIcon = () => {
  return CustomIcon({
    logoSvg: githubLogo,
    link: 'https://github.com/CrommVardek/polk-auction-ui',
    style: { width: '32px', height: '32px', margin: '6px' },
  });
};

const RelayChainIcon: (props: RelayChainIconProps) => JSX.Element = ({
  relayChainName,
  website,
}: RelayChainIconProps) => {
  const logo = relayChainName.toLowerCase() === 'kusama' ? kusamaLogo : polkadotLogo;
  return CustomIcon({ logoSvg: logo, link: website, style: { width: '32px', height: '32px', margin: '6px' } });
};

export const PolkAuctionHeader: (props: PolkAuctionHeaderProps) => JSX.Element = ({
  applicationName,
}: PolkAuctionHeaderProps) => {
  const currentRelayChain = PolkAuctionStore.useState(selectRelayChain);

  return (
    <div
      style={{ backgroundColor: currentRelayChain.mainColor, color: currentRelayChain.secondaryColor }}
      className='polkauction-header'
    >
      <nav style={{ display: 'flex' }}>
        <div>
          <span style={{ display: 'flex', marginLeft: '10px' }}>
            <h2>{applicationName}</h2>
          </span>
          <span className='polkauction-header-links'>
            <RelayChainIcon relayChainName={currentRelayChain.name} website={currentRelayChain.website ?? ''} />
            <GithubIcon />
          </span>
        </div>
      </nav>
    </div>
  );
};
