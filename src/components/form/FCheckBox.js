import { useFormContext, Controller, useForm } from "react-hook-form";
import { Checkbox, FormControllLabel } from "@mui/material";

function FCheckBox({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControllLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}

export default FCheckBox;
