import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormInput({
  name,
  label,
  control,
  rules,
  type,
  autoComplete,
  textFieldProps,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, required: "This field is required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          onChange={onChange}
          helperText={error ? error.message : null}
          error={!!error}
          value={value}
          label={label}
          type="email"
          {...textFieldProps}
          id={`field-${name}`}
          autoComplete={autoComplete}
        />
      )}
    />
  );
}
