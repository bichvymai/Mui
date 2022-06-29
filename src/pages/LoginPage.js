import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FCheckBox, FTextField, FormProvider } from "../components/form";
import useAuth from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const defaultValues = {
    username: "",
    email: "vy@gmail.com",
    password: "123",
    remember: true,
  };

  const auth = useAuth();

  const methods = useForm({ defaultValues });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    auth.login(data.username, () => navigate(from));
    console.log(data);
    // setError("afterSubmit", { message: "Server Response Error" });
  };

  return (
    <Box>
      <Typography variant="h3" textAlign="center" mb={3}>
        Login Form
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FTextField name="username" label="User Name" />

          <FTextField name="email" label="Email address" />

          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FCheckBox name="remember" label="Remember me" />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </Box>
  );
}

export default LoginPage;
