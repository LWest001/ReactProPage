import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormInput({ name, label, control, textFieldProps }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "This field is required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          onChange={onChange}
          helperText={error ? error.message : null}
          error={!!error}
          value={value}
          label={label}
          {...textFieldProps}
        />
      )}
    />
  );
}
