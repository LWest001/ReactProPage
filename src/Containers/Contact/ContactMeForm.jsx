import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export default function ContactMeForm({ sendEmail }) {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  return (
    <Box className="ContactMeForm" role="form" aria-labelledby="contact-form">
      <Typography variant="h3" id="contact-form" gridColumn="1/3">
        Send me a message
      </Typography>

      <Box
        display={!isSubmitSuccessful ? "grid" : "none"}
        gridTemplateColumns="1fr 1fr"
        flexDirection="column"
        gap={2}
      >
        <FormInput name="firstName" label="First Name" control={control} />
        <FormInput name="lastName" label="Last Name" control={control} />
        <FormInput
          name="email"
          label="Your Email Address"
          control={control}
          type="email"
          rules={{
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please enter a valid email address.",
            },
          }}
        />
        <FormInput name="subject" label="Subject" control={control} />
        <FormInput
          name="message"
          label="Message"
          control={control}
          textFieldProps={{
            rows: 4,
            multiline: true,
            sx: { gridColumn: "1/3" },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            gridColumn: "1/3",
          }}
          disabled={isSubmitting}
          id="submit"
          onClick={handleSubmit(sendEmail)}
        >
          Send message
        </Button>
      </Box>

      {isSubmitSuccessful && (
        <Typography
          my={3}
          textAlign={"start"}
          sx={{ gridColumn: "1/3" }}
          role="alert"
        >
          Thank you for getting in touch! I will respond as soon as I can.
        </Typography>
      )}
    </Box>
  );
}
