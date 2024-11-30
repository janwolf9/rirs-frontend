import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});
test('renders vsi stroski', () => {
  render(<App />);
  const linkElement = screen.getByText(/vsi stroski/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sidebar component', () => {
  render(<App />);
  const sidebarElement = screen.getByText(/sidebar/i);
  expect(sidebarElement).toBeInTheDocument();
});

test('renders Info', () => {
  render(<App />);
  const tableElement = screen.getByText(/Info/i);
  expect(tableElement).toBeInTheDocument();
});

test('renders app header', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders Razvijalci', () => {
  render(<App />);
  const logoElement = screen.getByText(/Razvijalci/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders sidebar with correct class', () => {
  render(<App />);
  const sidebarElement = screen.getByText(/sidebar/i);
  expect(sidebarElement).toHaveClass('sidebar');
});

test('renders table with correct class', () => {
  render(<App />);
  const tableElement = screen.getByText(/Menu/i);
  expect(tableElement).toHaveClass('menu-text');
});

test('renders red text', () => {
  render(<App />);
  const headerElement = screen.getByText('Info');
  expect(headerElement).toHaveClass('redcolor');
});

test('renders kontakt', () => {
  render(<App />);
  const sidebarElement = screen.getByText(/Kontakt/i);
  expect(sidebarElement).toHaveTextContent('Kontakt');
});
