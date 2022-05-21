import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { Footer } from '../src/components/footer/Footer';
import { mount } from 'enzyme';
import { Header } from '../src/components/header/Header';

test('app name is in App', () => {
  render(<App />);
  const appNameElement = screen.getAllByText(/PolkAuction/i);
  expect(appNameElement.find((e) => e.className == 'application-name')).toBeInTheDocument();
});

describe('<App />', () => {
  it('renders one footer element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it('renders one header element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
