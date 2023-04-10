// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const emailjs = require("@emailjs/browser");
const handler = async (event) => {
  const { PUBLIC_KEY_EMAILJS, SERVICE_ID, TEMPLATE_ID } = require(process.env);
  const {
    firstName,
    lastName,
    email,
    subject,
    message,
  } = event.queryStringParameters;
  const data = { firstName, lastName, email, subject, message };
  emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY_EMAILJS).then(
    (result) => {
      console.log(result.text);
      return result.text;
    },
    (error) => {
      console.log(error.text);
      return error.text;
    }
  );
};

module.exports = { handler };
