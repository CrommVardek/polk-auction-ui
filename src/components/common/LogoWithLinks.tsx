import React, { CSSProperties } from 'react';
import { Parachain } from '../../polk-auction-api/models/Parachain';
import websiteLogo from '../../assets/logos/globe-website.svg';
import polkadotJsLogo from '../../assets/logos/polkadot-js.svg';
import { CustomIcon } from './Icon';

const iconStyle: CSSProperties = { width: '16px', height: '16px', margin: '3px' };

export const WebsiteLinkLogo = (p: Parachain) => {
  return p.website ? <CustomIcon logoSvg={websiteLogo} link={p.website!} style={iconStyle} /> : <></>;
};

export const PolkadotJsLinkLogo = (p: Parachain) => {
  return p.polkadotJsExplorerUrl ? (
    <CustomIcon logoSvg={polkadotJsLogo} link={p.polkadotJsExplorerUrl!} style={iconStyle} />
  ) : (
    <></>
  );
};
