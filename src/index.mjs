import fs from "fs";

const html = fs.readFileSync("src/index.html", "utf8");

const handler = (event, context, callback) => {
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