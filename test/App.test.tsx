import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('app test', () => {
  render(<App />);
  const appNameElement = screen.getByText(/PolkAuction/i);
  expect(appNameElement).toBeInTheDocument();
});
