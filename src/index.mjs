import fs from "fs";

const htmlTemplate = fs.readFileSync("impacta.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

const html = htmlTemplate.replace(
  '<link rel="stylesheet" href="styles.css" />',
  `<style>${css}</style>`
);

const handler = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: html,
  };
  callback(null, response);
};

export default handler;