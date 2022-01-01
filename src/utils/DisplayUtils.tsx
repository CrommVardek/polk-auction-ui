import React, { CSSProperties, useMemo } from 'react';
import { Parachain } from '../polk-auction-api/models/Parachain';
import { CustomIcon } from '../components/common/Icon';
import websiteLogo from '../assets/logos/globe-website.svg';
import polkadotJsLogo from '../assets/logos/polkadot-js.svg';

const iconStyle: CSSProperties = { width: '16px', height: '16px', margin: '3px' };

export const numberWithCommas = (x: Number) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const getWebsiteLinkLogo = (p: Parachain) => {
  p.website ? <CustomIcon logoSvg={websiteLogo} link={p.website!} style={iconStyle} /> : <></>;
};

export const getPolkadotJsLinkLogo = (p: Parachain) => {
  p.polkadotJsExplorerUrl ? (
    <CustomIcon logoSvg={polkadotJsLogo} link={p.polkadotJsExplorerUrl!} style={iconStyle} />
  ) : (
    <></>
  );
};
