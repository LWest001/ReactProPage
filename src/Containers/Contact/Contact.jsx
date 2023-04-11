import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { AlternateEmail, GitHub, LinkedIn } from "@mui/icons-material";
import FormItemHook from "./FormItemHook";
import { useEffect } from "react";

export default function Contact() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm({
    mode: "all",
  });

  useEffect(() => console.log(Object.entries(errors)), [errors]);

  // const sendEmail = (data) => {
  //   emailjs
  //     .send("service_rumsnfj", "template_kk9crxp", data, "twU11xl6ItuNlbP3k")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // Testing function
  const sendEmail = (data) => {
    console.log(data);
  };

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
            onSubmit={handleSubmit(sendEmail)}
            display="grid"
            gridTemplateColumns="1fr 1fr"
            flexDirection="column"
            gap={2}
          >
            {!isSubmitting && !isSubmitSuccessful && (
              <>
                <FormItemHook
                  control={control}
                  name={"firstName"}
                  prettyName="First Name"
                />
                <FormItemHook
                  control={control}
                  name={"lastName"}
                  prettyName="Last Name"
                />
                <FormItemHook
                  control={control}
                  name={"email"}
                  type="email"
                  prettyName="Your Email Address"
                />
                <FormItemHook
                  control={control}
                  name={"subject"}
                  prettyName="Subject"
                />
                <FormItemHook
                  control={control}
                  name={"message"}
                  prettyName="Message"
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
