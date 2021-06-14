import { AppBar, IconButton, makeStyles, SvgIcon, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { RelayChain } from '../models/Chain';
import githubLogo from '../github_logo.svg';
import logo from '../Polkadot_logo.svg';

interface HeaderProps {
  applicationName: string;
  chains: Array<RelayChain>;
}

interface RelayChainIconProps {
  website: string;
}

const useStyles = (chain: RelayChain) =>
  makeStyles((theme) => {
  return ({
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
  });
});

const GithubIcon = () => {
  return (
    <a href="https://github.com/CrommVardek/polk-auction-ui">
      <SvgIcon >
        <path d={githubLogo} />
      </SvgIcon>
    </a>);
}

const RelayChainIcon: (props: RelayChainIconProps) => JSX.Element = ({website} : RelayChainIconProps) => {
  return (
    <a href={website}>
      <SvgIcon>
        <path d={logo} />
      </SvgIcon>
    </a>
  );
}

export const Header: (props: HeaderProps) => JSX.Element = ({ applicationName, chains }: HeaderProps) => {

  const [selectedChain, setSelectedChain] = useState(chains[0]);
  const classes = useStyles(selectedChain)();

  const switchChain = useCallback((event, newValue) => {
    setSelectedChain(chains[newValue]);
  }, [chains]);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <div className={classes.toolbar}>
          <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {applicationName}
          </Typography>
            <div className={classes.toolbarButtons}>
              <IconButton aria-label='github'>
                  <GithubIcon />
              </IconButton>
              <IconButton aria-label='relay-chain'>
                  <RelayChainIcon website={selectedChain.website ?? ''} />
              </IconButton>
            </div>
          </Toolbar>
        </div>
        <div className={classes.chains}>
          <Tabs
            value={selectedChain}
            onChange={switchChain}
            aria-label='blockchains'
            TabIndicatorProps={{ className: classes.indicator }}
          >
            {chains.map((chain) => {
              return (
                <Tab
                  label={chain.name}
                  style={{ color: chain.name === selectedChain.name ? chain.secondaryColor : '#bebebe' }}
                />
              );
            })}
          </Tabs>
        </div>
      </AppBar>
    </div>
  );
};
