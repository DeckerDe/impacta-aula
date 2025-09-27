import fs from "fs";

const htmlTemplate = fs.readFileSync("impacta.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

const handler = async (event, context, callback) => {
  // Pega a variável de ambiente ou usa um valor padrão
  const mensagemPersonalizada = process.env.MENSAGEM_PERSONALIZADA || "Bem-vindos à Impacta!";
  
  // Substitui o placeholder pela variável de ambiente
  let html = htmlTemplate.replace('{{MENSAGEM_PERSONALIZADA}}', mensagemPersonalizada);
  
  // Injeta o CSS inline
  html = html.replace(
    '<link rel="stylesheet" href="styles.css" />',
    `<style>${css}</style>`
  );

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