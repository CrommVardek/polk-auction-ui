import { useCallback, useState } from 'react';
import { RelayChain } from '../../models/Chain';
import githubLogo from '../../github_logo.svg';
import logo from '../../Polkadot_logo.svg';
import './Header.css';
import * as React from 'react';
import { selectRelayChain } from '../../store/application-state/ApplicationStateAction';
import { useDispatch } from 'react-redux';

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

  const dispatch = useDispatch();

  const switchChain = useCallback(
    (chainName) => {
      const chain = chains.find(c => c.name === chainName) ?? selectedChain;
      setSelectedChain(chain);
      dispatch(selectRelayChain(chain));
    },
    [chains, dispatch, selectedChain],
  );

  return (
    <>
    <div
      style={{ backgroundColor: selectedChain.mainColor, color: selectedChain.secondaryColor }}
      className='polkauction-header'
    >
      <nav style={{ display: 'flex' }}>
        <div>
            <span style={{ display: 'flex', marginLeft: '10px' }}>
              <h2>{applicationName}</h2>
            </span>
            <span className='polkauction-header-links'>
              <RelayChainIcon website={selectedChain.website ?? ''} />
              <GithubIcon />
            </span>
        </div>
        
      </nav>
      
    </div>
    <div
      style={{ backgroundColor: selectedChain.mainColor, color: selectedChain.secondaryColor }}
      className='polkauction-header'
    >
      <nav>
        <div className='relay-chains-tab'>
            {chains.map(c => 
              <button id={c.name} onClick={(e) => switchChain(c.name)}>
                <span style={{ backgroundColor: selectedChain.name === c.name ? '#ccc' : selectedChain.mainColor, color: selectedChain.secondaryColor }}>
                  <h3>
                    {c.name}
                  </h3>
                </span>
              </button> )}
        </div>
      </nav>
    </div>
    </>
  );
};
