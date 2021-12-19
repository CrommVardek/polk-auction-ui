import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { Footer } from '../src/components/Footer';
import { mount } from 'enzyme';
import { Header } from '../src/components/header/Header';

test('app name is in App', () => {
  render(<App />);
  const appNameElement = screen.getByText(/PolkAuction/i);
  expect(appNameElement).toBeInTheDocument();
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
