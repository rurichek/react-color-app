import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewColorForm from './NewColorForm';

import App from './App';

test('renders App component', () => {
  render(
    <App />
  );
});

test('navigates to new color form', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/colors/new" element={<NewColorForm />} />
      </Routes>
    </BrowserRouter>
  );

  // Simulate navigation
  window.history.pushState({}, '', '/colors/new');

  // Check for form elements (adjust based on actual form structure)
  expect(screen.getByLabelText(/Add Color/i)).toBeInTheDocument();
});


