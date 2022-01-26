import React, { CSSProperties } from 'react';
import { Parachain } from '../../polk-auction-api/models/Parachain';
import websiteLogo from '../../assets/logos/globe-website.svg';
import polkadotJsLogo from '../../assets/logos/polkadot-js.svg';
import { CustomIcon } from './Icon';

const iconStyle: CSSProperties = { width: '18px', height: '18px', margin: '3px', marginLeft: '6px' };

export const WebsiteLinkLogo = (p: Parachain) => {
  return <CustomIcon logoSvg={websiteLogo} link={p.website} style={iconStyle} className='website-icon' />;
};

export const PolkadotJsLinkLogo = (p: Parachain) => {
  return <CustomIcon logoSvg={polkadotJsLogo} link={p.polkadotJsExplorerUrl} style={iconStyle} />;
};
