import { AppBar, makeStyles, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { Blockchain } from '../models/Chain';

interface HeaderProps {
  applicationName: string;
  chains: Array<Blockchain>;
  logo: string;
}

const useStyles = (chain: Blockchain) => makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '&:focus': {
      opacity: 1,
    },
  },
  indicator: {
    backgroundColor: chain ? chain.secondaryColor : '#ffffff',
    height: "10px",
    display: "flex",
    width: "100%",
  },
  toolbar: {
    backgroundColor: chain ? chain.mainColor : '#000000',
  },
  chains: {
    backgroundColor: chain ? chain.mainColor : '#000000',
  }
}));

export const Header: (props: HeaderProps) => JSX.Element = ({ applicationName, chains, logo }: HeaderProps) => {

  const [selectedChain, setSelectedChain] = useState(chains[0]);
  const classes = useStyles(selectedChain)();

  const switchChain = useCallback((event, newValue) => {
    setSelectedChain(chains[newValue]);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <div className={classes.toolbar}>
          <Toolbar>// TODO</Toolbar>
        </div>
        <div className={classes.chains}>
          <Tabs value={selectedChain} onChange={switchChain} aria-label='blockchains' TabIndicatorProps={{ className: classes.indicator }}>
            {chains.map((chain) => {
              return <Tab label={chain.name} style={{ color: chain.name === selectedChain.name ? chain.secondaryColor : "#bebebe" }} />;
            })}
          </Tabs>
        </div>
      </AppBar>
    </div>
  );
};
