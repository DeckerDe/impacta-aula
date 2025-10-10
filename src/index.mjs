

import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const htmlTemplate = fs.readFileSync(join(__dirname, 'impacta.html'), "utf8");
const css = fs.readFileSync(join(__dirname, 'styles.css'), "utf8");

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

  const algo = 10
  if(algo == 10){
    console.log(algo)
  }

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: html,
  };
  return response;
};

export default handler;