import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

test('renders hero title', () => {
  render(<Hero />);
  expect(screen.getByText(/I build accessible/i)).toBeInTheDocument();
});
