import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import LoginIcon from "@mui/icons-material/Login";
import { useForm, useFormContext, Controller } from "react-hook-form";
import {
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { FormProvider, FCheckBox, FTextField } from "./form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required(),
  })
  .required();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignInButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const defaultValues = {
    username: "",
    email: "vy@gmail.com",
    password: "123",
    remember: true,
  };

  const methods = useForm({ defaultValues });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // setError("afterSubmit", { message: "Server Response Error" });
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" endIcon={<LoginIcon />}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
      </Modal>
    </div>
  );
}
