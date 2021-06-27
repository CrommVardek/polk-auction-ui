import { RelayChain } from '../../models/Chain';
import './Header.css';
import { ParachainMenu } from './ParachainMenu';
import { PolkAuctionHeader } from './PolkAuctionHeader';
import { RelayChainsTab } from './RelayChainsTab';

interface HeaderProps {
  applicationName: string;
  chains: Array<RelayChain>;
}

export const Header: (props: HeaderProps) => JSX.Element = ({ applicationName, chains }: HeaderProps) => {
  return (
    <>
      <PolkAuctionHeader applicationName={applicationName} />
      <RelayChainsTab chains={chains} />
      <ParachainMenu />
    </>
  );
};
