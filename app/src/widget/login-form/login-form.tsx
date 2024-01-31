import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'shared/services/auth/actions';

interface IFormInput {
  login: string;
  password: string;
}

const LoginForm = () => {
  const mainClass = 'login-form';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    defaultValues: {
      login: '',
      password: ''
    }
  });

  const _onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    dispatch(login({ username: data.login, navigate }));
  };

  return (
    <Box
      component="form"
      width={{ xs: '100%', sm: '420px' }}
      id={mainClass}
      onSubmit={handleSubmit(_onSubmit)}>
      <Paper elevation={0}>
        <Box p={3}>
          <Box mb={3}>
            <Typography variant="h4" align="center">
              Login
            </Typography>
          </Box>

          <Box mb={3}>
            <Controller
              name="login"
              control={control}
              rules={{ required: 'this field is required' }}
              render={({ field }) => (
                <TextField
                  id={`${mainClass}__login`}
                  {...field}
                  label="Login"
                  placeholder="Login"
                  error={!!errors.login?.message}
                  helperText={errors.login?.message}
                  fullWidth
                />
              )}
            />
          </Box>

          <Box mb={3}>
            <Controller
              name="password"
              control={control}
              rules={{ required: 'this field is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  id={`${mainClass}__password`}
                  placeholder="Password"
                  type="password"
                  error={!!errors.password?.message}
                  helperText={errors.password?.message}
                  fullWidth
                />
              )}
            />
          </Box>

          <Button
            id={`${mainClass}__submit-btn`}
            variant="contained"
            color="primary"
            type={'submit'}
            fullWidth>
            Sign in
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export { LoginForm };
