import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppFallback } from '../app-fallback';

describe('AppFallback component', () => {
  it('Should render fallback', () => {
    render(
      <AppFallback isVisible={false} fallback={<div>loading...</div>}>
        <div>
          Content
        </div>
      </AppFallback>
    );
    expect(screen.getByText('loading...')).toBeInTheDocument();
  });

  it('Should render content', () => {
    render(
      <AppFallback isVisible={true} fallback={<div>loading...</div>}>
        <div>
          Content
        </div>
      </AppFallback>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

});
