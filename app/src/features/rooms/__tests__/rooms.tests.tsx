import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import { useGetRoomsQuery } from '../model/api';
import { RoomList } from '../rooms';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MOCK_RESPONSE } from '../mocks';
import * as ReactRedux from "react-redux";

const mockStore = configureMockStore();
const dispatch = jest.fn();
jest.mock('../model/api');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Room component', () => {
  it('Should render room component with inactive image', async () => {
    useGetRoomsQuery.mockReturnValueOnce({
      data: MOCK_RESPONSE,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null
    });

    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(dispatch);

    const { getByText, getAllByRole, debug } = render(
      <Provider store={mockStore({})}>
        <RoomList />
      </Provider>
    );

    getAllByRole('img').forEach(item => {
      expect(item).toHaveAttribute('src', 'arrow-blue.svg');
    })

    const firstItem = getAllByRole('button')[1];
    fireEvent.click(firstItem);
    expect(dispatch).toHaveBeenCalledTimes(3)

    expect(getByText('Choose you game room')).toBeInTheDocument();
    expect(getByText('name')).toBeInTheDocument();
    expect(getByText('name-1')).toBeInTheDocument();
    expect(getByText('name-2')).toBeInTheDocument();
  });
});
