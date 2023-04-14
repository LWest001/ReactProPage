import {
  Box,
  Button,
  Card,
  CardContent,
  FormLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { AlternateEmail, GitHub, LinkedIn } from "@mui/icons-material";
import FormItemHook from "./FormItemHook";
import emailjs from "@emailjs/browser";
import ContactMeForm from "./ContactMeForm";

export default function Contact() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm({
    mode: "all",
  });

  const sendEmail = (data) => {
    emailjs
      .send("service_rumsnfj", "template_kk9crxp", data, "twU11xl6ItuNlbP3k")
      .then(
        (result) => {
          return result.text;
        },
        (error) => {
          return error.text;
        }
      );
  };

  // Testing function
  // const sendEmail = (data) => {
  //   console.log(data);
  // };

  return (
    <Card raised>
      <CardContent>
        <Stack direction="column" gap={2}>
          <Stack
            direction={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems={["start", "start", "center"]}
            flexWrap="wrap"
            aria-labelledby="contact-links"
          >
            <Typography variant="h3" width={"100%"} id="contact-links">
              Find me on the web
            </Typography>
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
          <ContactMeForm sendEmail={sendEmail} />
        </Stack>
      </CardContent>
    </Card>
  );
}

export const { sendEmail } = Contact;
