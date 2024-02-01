import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../layout';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';

const mockStore = configureMockStore();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Layout component', () => {
  it('Should render footer', async () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue('username');

    const { getByText } = render(
      <Provider store={mockStore({})}>
        <Layout>
          <div>test</div>
        </Layout>
      </Provider>
    );

    expect(getByText('Playing with username')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();
  });
});
