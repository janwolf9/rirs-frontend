import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AddCost from './components/AddCost.jsx';

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
test('renders AddCost component', () => {
  render(<AddCost />);
  const addCostElement = screen.getByText(/Dodaj Strošek/i);
  expect(addCostElement).toBeInTheDocument();
});

test('calls onAdd when form is submitted', () => {
  const handleAdd = jest.fn();
  render(<AddCost onAdd={handleAdd} />);
  fireEvent.submit(screen.getByRole('button', { name: /Dodaj Strošek/i }));
  expect(handleAdd).toHaveBeenCalled();
});

test('renders input fields', () => {
  render(<AddCost />);
  const inputElements = screen.getAllByRole('textbox');
  expect(inputElements.length).toBeGreaterThan(0);
});

test('renders submit button', () => {
  render(<AddCost />);
  const buttonElement = screen.getByRole('button', { name: /Dodaj Strošek/i });
  expect(buttonElement).toBeInTheDocument();
});

test('input fields accept text', () => {
  render(<AddCost />);
  const inputElement = screen.getByLabelText(/Naziv:/i);
  fireEvent.change(inputElement, { target: { value: '100' } });
  expect(inputElement.value).toBe('100');
});
