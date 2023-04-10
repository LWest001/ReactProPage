// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const emailjs = require("@emailjs/browser");
const sendEmail = (data) => {
  const { PUBLIC_KEY_EMAILJS, SERVICE_ID, TEMPLATE_ID } = require(process.env);
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY_EMAILJS)
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

module.exports = { sendEmail };
