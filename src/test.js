import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Smart Scoop/i);
  expect(headingElement).toBeInTheDocument();
});
