import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AppFallback } from 'shared/UI-kit';

import { userMessageSelector } from './model/selectors';
import { closeUserMessage } from './model/slice';

const UserMessage = () => {
  const dispatch = useDispatch();
  const { data, isOpenUserMessage } = useSelector(userMessageSelector);
  const _close = useCallback(() => dispatch(closeUserMessage()), [dispatch]);

  return (
    <AppFallback fallback={null} isVisible={!!data.message}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpenUserMessage}
        autoHideDuration={61000}
        onClose={_close}>
        <Alert
          onClose={_close}
          severity={data.status}
          variant="filled"
          sx={{ width: '100%' }}>
          {data.message}
        </Alert>
      </Snackbar>
    </AppFallback>
  );
};

export default UserMessage;
