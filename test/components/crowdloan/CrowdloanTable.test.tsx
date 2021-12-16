import { mount, shallow } from 'enzyme';
import React from 'react';
import { CrowdloanTable } from '../../../src/components/crowdloan/CrowdloanTable';
import { funds } from '../../testData';

describe('<CrowdloanTable />', () => {
  const wrapper = shallow(<CrowdloanTable funds={funds} />);
  it('renders a table', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });
  it('renders X <tr>, where X is the number of funds + 1', () => {
    expect(wrapper.find('tr')).toHaveLength(funds.length + 1);
  });
});
