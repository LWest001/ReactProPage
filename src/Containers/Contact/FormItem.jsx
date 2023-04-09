import { Box, FormHelperText, Input } from "@mui/material";

export default function FormItem({
  name,
  prettyName,
  required,
  register,
  error,
  type = "text",
  inputProps,
  sx,
}) {
  return (
    <Box width="100%" sx={{ ...sx }}>
      {error && (
        <FormHelperText error={error !== undefined}>{error}</FormHelperText>
      )}
      <Input
        {...register(name, {
          required: required,
        })}
        label={prettyName}
        type={type}
        placeholder={prettyName}
        error={error !== undefined}
        {...inputProps}
      />
    </Box>
  );
}
