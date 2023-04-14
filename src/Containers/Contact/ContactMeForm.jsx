import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import FormItemHook from "./FormItemHook";

export default function ContactMeForm({ sendEmail }) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm({
    mode: "onSubmit",
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(sendEmail)}
      display="grid"
      gridTemplateColumns="1fr 1fr"
      flexDirection="column"
      gap={2}
      className="ContactMeForm"
      role="form"
      aria-labelledby="contact-form"
      submitted={isSubmitSuccessful || null}
    >
      {!isSubmitting && !isSubmitSuccessful && (
        <>
          <Typography variant="h3" id="contact-form" gridColumn="1/3">
            Send me a message
          </Typography>
          <FormItemHook
            control={control}
            name="firstName"
            prettyName="First Name"
            id="firstName"
          />
          <FormItemHook
            control={control}
            name={"lastName"}
            prettyName="Last Name"
            id="lastName"
          />
          <FormItemHook
            control={control}
            name={"email"}
            type="email"
            prettyName="Your Email Address"
            id="email"
          />
          <FormItemHook
            control={control}
            name={"subject"}
            prettyName="Subject"
            id="subject"
          />
          <FormItemHook
            control={control}
            name={"message"}
            prettyName="Message"
            id="message"
            textFieldProps={{
              rows: 4,
              multiline: true,
            }}
            sx={{ gridColumn: "1/3" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              gridColumn: "1/3",
            }}
            disabled={isSubmitting}
            id="submit"
          >
            Send message
          </Button>
        </>
      )}
      {isSubmitSuccessful && (
        <Typography sx={{ gridColumn: "1/3" }}>
          Thank you for getting in touch! I will respond as soon as I can.
        </Typography>
      )}
    </Box>
  );
}
