import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import facePic from "../../assets/avatar-headshot.png";

export default function ContactMeForm({ sendEmail }) {
  
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
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
      <Typography variant="h3" id="contact-form" gridColumn="1/3" pb={1}>
        Send me a message
      </Typography>
      <Box
        display={!isSubmitSuccessful ? "grid" : "none"}
        gridTemplateColumns="1fr 1fr"
        flexDirection="column"
        gap={2}
      >
        <FormInput
          autoComplete="given-name"
          name="firstName"
          label="First Name"
          control={control}
        />
        <FormInput
          autoComplete="family-name"
          name="lastName"
          label="Last Name"
          control={control}
        />
        <FormInput
          autoComplete="email"
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
      <Stack direction="row" my={3} gridColumn="1/3" justifyContent="center">
        <Avatar sx={{ height: 70, width: 70 }} src={facePic} />
        <Paper
          elevation={3}
          sx={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ml: 2,
            px: 2,
          }}
        >
          <Typography textAlign={"start"} role="alert">
            Thank you for getting in touch! I will respond as soon as I can.
          </Typography>
        </Paper>
      </Stack>
      )}
    </Box>
  );
}
