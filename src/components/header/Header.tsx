import { useCallback, useState } from 'react';
import { RelayChain } from '../../models/Chain';
import githubLogo from '../../github_logo.svg';
import logo from '../../Polkadot_logo.svg';
import './Header.css';

interface HeaderProps {
  applicationName: string;
  chains: Array<RelayChain>;
}

interface CustomIconProps {
  logoSvg: string;
  link: string;
}

interface RelayChainIconProps {
  website: string;
}

/*const useStyles = (chain: RelayChain) =>
  makeStyles((theme) => {
    return {
      root: {
        flexGrow: 1,
        '&:focus': {
          opacity: 1,
        },
      },
      indicator: {
        backgroundColor: chain.secondaryColor ?? '#ffffff',
        height: '10px',
        display: 'flex',
        width: '100%',
      },
      toolbar: {
        backgroundColor: chain.mainColor ?? '#000000',
        color: chain.secondaryColor ?? '#ffffff',
      },
      toolbarButtons: {
        marginLeft: 'auto',
        color: chain.secondaryColor ?? '#ffffff',
      },
      chains: {
        backgroundColor: chain.mainColor ?? '#000000',
      },
      title: {
        flexGrow: 1,
      },
    };
  });*/

const customIcon: (props: CustomIconProps) => JSX.Element = ({ logoSvg, link }: CustomIconProps) => {
  return (
    <a href={link}>
      <img
        src={logoSvg}
        alt='custom-icon'
        style={{ width: '32px', height: '32px', margin: '6px' }}
        className='custom-logo'
      />
    </a>
  );
};

const GithubIcon = () => {
  return customIcon({ logoSvg: githubLogo, link: 'https://github.com/CrommVardek/polk-auction-ui' });
};

const RelayChainIcon: (props: RelayChainIconProps) => JSX.Element = ({ website }: RelayChainIconProps) => {
  return customIcon({ logoSvg: logo, link: website });
};

export const Header: (props: HeaderProps) => JSX.Element = ({ applicationName, chains }: HeaderProps) => {
  const [selectedChain, setSelectedChain] = useState(chains[0]);

  const switchChain = useCallback(
    (event, newValue) => {
      setSelectedChain(chains[newValue]);
    },
    [chains],
  );

  return (
    <div
      style={{ backgroundColor: selectedChain.mainColor, color: selectedChain.secondaryColor }}
      className='polkauction-header'
    >
      <nav style={{ display: 'flex' }}>
        <span style={{ display: 'flex', marginLeft: '10px' }}>
          <h2>{applicationName}</h2>
        </span>
        <span className='polkauction-header-links'>
          <RelayChainIcon website={selectedChain.website ?? ''} />
          <GithubIcon />
        </span>
      </nav>
    </div>
  );
};
