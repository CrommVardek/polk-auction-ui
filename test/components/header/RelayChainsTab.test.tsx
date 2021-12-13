import React from 'react';
import { mount } from 'enzyme';
import { RelayChainsTab, RelayChainButton } from '../../../src/components/header/RelayChainsTab';
import { RelayChain } from '../../../src/models/Chain';

const chains = [
  {
    name: 'Polkadot',
  } as RelayChain,
  {
    name: 'Kusama',
  } as RelayChain,
  {
    name: 'Westend',
  } as RelayChain,
];

describe('<RelayChainsTab />', () => {
  it('renders a button for each relaychain', () => {
    const wrapper = mount(<RelayChainsTab chains={chains} />);
    expect(wrapper.find(RelayChainButton)).toHaveLength(chains.length);
  });
});
