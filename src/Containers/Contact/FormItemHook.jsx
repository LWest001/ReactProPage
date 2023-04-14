import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

export default function FormItemHook({
  control,
  name,
  prettyName,
  type,
  sx,
  textFieldProps,
  id,
}) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField
      onChange={field.onChange} // send value to hook form
      onBlur={field.onBlur} // notify when input is touched/blur
      name={field.name} // send down the input name
      inputRef={field.ref} // send input ref, so we can focus on input when error appear
      label={prettyName}
      error={invalid || error}
      type={type}
      required
      {...textFieldProps}
      sx={{ ...sx }}
      id={id}
    />
  );
}
