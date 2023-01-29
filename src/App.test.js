import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders the BookingForm heading', () => {
  render(BookingForm);
  const linkElement = screen.getByText('Find a table for any occassion');
  expect(linkElement).toBeInTheDocument();
});
