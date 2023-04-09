import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormHelperText,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import FormItem from "./FormItem";
import emailjs from "@emailjs/browser";
import { AlternateEmail, GitHub, LinkedIn } from "@mui/icons-material";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send("service_rumsnfj", "template_kk9crxp", data, "twU11xl6ItuNlbP3k")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Testing function
  //   const sendEmail = (data) => {
  //     setTimeout(() => {
  //       console.log(data);
  //     }, 3000);
  //   };

  return (
    <Card raised>
      <CardContent>
        <Stack direction="column" gap={2}>
          <Stack
            direction={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems={["start", "start", "center"]}
          >
            <Button
              display="flex"
              component="a"
              target="_blank"
              href="mailto:leo.westebbe@gmail.com"
              sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}
            >
              <AlternateEmail /> leo.westebbe@gmail.com
            </Button>
            <Button
              display="flex"
              component="a"
              target="_blank"
              href="https://github.com/LWest001"
              sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}
            >
              <GitHub /> GitHub: LWest001
            </Button>
            <Button
              display="flex"
              component="a"
              target="_blank"
              href="https://linkedin.com/in/leo-westebbe"
              sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}
            >
              <LinkedIn /> LinkedIn: Leo-Westebbe
            </Button>
          </Stack>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => sendEmail(data))}
            display="grid"
            gridTemplateColumns="1fr 1fr"
            flexDirection="column"
            gap={2}
          >
            {!isSubmitting && !isSubmitSuccessful && (
              <>
                <FormItem
                  name="email"
                  prettyName="Email Address"
                  required="Please provide an email address"
                  register={register}
                  type="email"
                  error={errors.email?.message}
                  inputProps={{ fullWidth: true }}
                />
                <FormItem
                  name="subject"
                  prettyName="Subject"
                  required="Please provide a subject"
                  register={register}
                  error={errors.subject?.message}
                  inputProps={{ fullWidth: true }}
                />
                <FormItem
                  name="firstName"
                  prettyName="First Name"
                  required="Please provide a first name."
                  error={errors.firstName?.message}
                  register={register}
                  inputProps={{ fullWidth: true }}
                />
                <FormItem
                  name="lastName"
                  prettyName="Last Name"
                  required="Please provide a last name."
                  error={errors.firstName?.message}
                  register={register}
                  inputProps={{ fullWidth: true }}
                />
                <FormItem
                  name="message"
                  prettyName="Message"
                  required="Please provide a message."
                  error={errors.message?.message}
                  register={register}
                  sx={{ gridColumn: "1/3" }}
                  inputProps={{
                    multiline: true,
                    rows: 4,
                    fullWidth: true,
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    gridColumn: "1/3",
                  }}
                  disabled={isSubmitting}
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
        </Stack>
      </CardContent>
    </Card>
  );
}
