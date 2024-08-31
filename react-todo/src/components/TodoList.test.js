import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Use the main import path
import TodoList from '../components/TodoList';

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React in depth')).toBeInTheDocument();
  expect(screen.getByText('Learn javaScript in depth')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React in depth');
  // Toggle to completed
  fireEvent.click(todo); 
  expect(todo).toHaveStyle('text-decoration: none');
    // Toggle back to not completed
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React in depth')).not.toBeInTheDocument();
});
