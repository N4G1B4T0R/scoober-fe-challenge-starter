import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppFooter } from '../app-footer';

describe('AppFooter component', () => {
  it('Should render footer', () => {
    render(
      <AppFooter />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
