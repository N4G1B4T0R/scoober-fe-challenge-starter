import React, { ReactNode } from 'react';
import * as ReactRedux from 'react-redux';
import { Provider } from 'react-redux';
import * as ReactRouter from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

const navigateMock = jest.fn();
const mockDispatch = jest.fn();
const mockStore = configureMockStore();

export const setupComponent = (Component: ReactNode) => {
  const useDispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');
  const useNavigateSpy = jest.spyOn(ReactRouter, 'useNavigate');

  useDispatchSpy.mockReturnValue(mockDispatch);
  useNavigateSpy.mockReturnValue(navigateMock);

  const rendered = render(
    <Provider store={mockStore({})}>
      <MemoryRouter>{Component}</MemoryRouter>
      </Provider>
  );

  return {
    ...rendered,
    mockDispatch,
    useDispatchSpy,
    navigateMock
  };
};
