import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../App';
import { store } from 'store';
import { Provider } from 'react-redux';

describe('App', () => {
  it('render navigation links', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const aboutLink = screen.getByText(/about/i);
    const homeLink = screen.getByText(/home/i);

    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
});
