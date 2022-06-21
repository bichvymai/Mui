import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginIcon from "@mui/icons-material/Login";
import { useForm } from "react-hook-form";
import { useState } from "react";

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
    formState: { error, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "Server Response Error" });
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="usermane">Username</label>
              <input type="text" autoComplete="off" {...register("username")} />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
