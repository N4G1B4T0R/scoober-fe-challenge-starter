import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UserMessage from "../user-message";
import { saveUserMessage, userMessageSlice, UserMessageStatus } from "features/user-message";

const store = configureStore({
  reducer: {
    userMessage: userMessageSlice
  }
})

describe('UserMessage component', () => {
  it('Should render UserMessage', async () => {

    const { getByText, queryByRole, getByRole} = render(
      <Provider store={store}>
        <UserMessage />
      </Provider>
    );

    expect(queryByRole('presentation')).not.toBeInTheDocument();

    act(() => {
      store.dispatch(saveUserMessage({
        status: UserMessageStatus.success,
        message: 'test'
      }))
    });

    expect(queryByRole('presentation')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();

    act(() => {
      userEvent.click(getByRole('button'))
    });

    expect(queryByRole('presentation')).not.toBeInTheDocument();
  });
});
