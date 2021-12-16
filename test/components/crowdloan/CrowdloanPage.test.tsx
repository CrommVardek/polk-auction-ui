import { mount } from 'enzyme';
import React from 'react';
import { CrowdloanPage } from '../../../src/components/crowdloan/CrowdloanPage';
import { CrowdloanTable } from '../../../src/components/crowdloan/CrowdloanTable';
import * as apiClient from '../../../src/polk-auction-api/ApiClient';
import { Crowdloan, Fund } from '../../../src/polk-auction-api/models/Crowdloan';
import { SpinnerDotted } from 'spinners-react';
import { funds } from '../../testData';

describe('<CrowdloanPage />', () => {
  it('renders one spinner if loading crowdloan', () => {
    const wrapper = mount(<CrowdloanPage />);
    expect(wrapper.find(SpinnerDotted)).toHaveLength(1);
  });
  it('renders two tables', () => {
    const useCrowdloansMock = jest.spyOn(apiClient, 'useCrowdloans');
    useCrowdloansMock.mockImplementation((relayChain: String) => {
      return { data: { funds: funds } as Crowdloan, loading: false };
    });
    const wrapper = mount(<CrowdloanPage />);
    expect(wrapper.find(CrowdloanTable)).toHaveLength(2);
  });
});
