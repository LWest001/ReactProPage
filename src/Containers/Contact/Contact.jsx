import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import FormItem from "./FormItem";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card raised>
      <CardContent>
        <Stack direction="column">
          <IconButton>
            <EmailIcon />
          </IconButton>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => console.log(data))}
            display="grid"
            gridTemplateColumns="1fr 1fr"
            flexDirection="column"
            gap={2}
          >
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
              sx={{ gridColumn: "1/3" }}
            >
              Send message
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
