import { mount } from 'enzyme';
import React from 'react';
import { ParachainsPage } from '../../../src/components/parachain/ParachainsPage';
import { CustomIcon } from '../../../src/components/common/Icon';
import * as apiClient from '../../../src/polk-auction-api/ApiClient';
import { SpinnerDotted } from 'spinners-react';
import { Parachain } from '../../../src/polk-auction-api/models/Parachain';
import { parachains, parachainsWithParaThreads } from '../../testData';

describe('<ParachainsPage />', () => {

  it('renders one spinner if loading data', () => {
    const wrapper = mount(<ParachainsPage />);
    expect(wrapper.find(SpinnerDotted)).toHaveLength(1);
  });

  it('renders one tables', () => {
    const useParachainsMock = jest.spyOn(apiClient, 'useParachains');
    useParachainsMock.mockImplementation((relayChain: String) => {
      return { data: [] as Parachain[], loading: false };
    });
    const wrapper = mount(<ParachainsPage />);
    expect(wrapper.find('table')).toHaveLength(1);
  });

  //TODO
  it('renders as much website link as there are parachain URL from data', () => {
    const useParachainsMock = jest.spyOn(apiClient, 'useParachains');
    useParachainsMock.mockImplementation((relayChain: String) => {
      return { data: parachains as Parachain[], loading: false };
    });
    const wrapper = mount(<ParachainsPage />);
    expect(wrapper.find('img.website-icon')).toHaveLength(parachains.filter((p) => p.website !== undefined).length);
  });

  it('renders X <tr>, where X is the number of parachains with lifecycle Parachain + 1', () => {
    const useParachainsMock = jest.spyOn(apiClient, 'useParachains');
    useParachainsMock.mockImplementation((relayChain: String) => {
      return { data: parachainsWithParaThreads as Parachain[], loading: false };
    });
    const wrapper = mount(<ParachainsPage />);
    expect(wrapper.find('tr')).toHaveLength(
      parachainsWithParaThreads.filter((p) => p.parachainLifeCycle === 'PARACHAIN').length + 1,
    );
  });
});
