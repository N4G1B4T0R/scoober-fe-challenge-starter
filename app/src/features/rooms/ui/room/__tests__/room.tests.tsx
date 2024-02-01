import React from 'react';
import { render } from "@testing-library/react";
import { Room } from '../room';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';

const mockStore = configureMockStore();
const props = {
  id: 'id',
  name: 'name',
  owner: 'owner',
  type: 'type'
};
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Room component', () => {
  it('Should render room component with inactive image', async () => {

    const { getByText, getByRole } = render(
      <Provider store={mockStore({})}>
        <Room {...props} />
      </Provider>
    );

    expect(getByText('name')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', 'arrow-blue.svg');
  });

  it('Should render room component with active image', async () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue(props);

    const { getByRole, getByText } = render(
      <Provider store={mockStore({})}>
        <Room {...props} />
      </Provider>
    );

    expect(getByText('name')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', 'arrow-white.svg');
  });
});
