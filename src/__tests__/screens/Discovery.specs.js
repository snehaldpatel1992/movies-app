import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Discovery } from '../../screens/Discovery';

test('renders all movies', () => {
  render(<Discovery />);
  const loading = screen.queryByText(/loading/i);
  expect(loading).toBeInTheDocument();
});
