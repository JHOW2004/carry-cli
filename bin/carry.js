#!/usr/bin/env node

const { sendMessageToAPI } = require('../src/apiClient');

// Captura os argumentos do terminal
const args = process.argv.slice(2);

// Verifica se o usuário passou uma pergunta válida
if (args.length === 0) {
  console.error('Erro: Você deve fornecer uma pergunta entre aspas.');
  console.log('Uso: carry "sua pergunta aqui"');
  process.exit(1);
}

// Junta todos os argumentos em uma única string
const question = args.join(' ');

// Envia a mensagem para a API e lida com possíveis erros
sendMessageToAPI(question)
  .then((response) => {
    if (response) {
      console.log("Carry:", response);
    } else {
      console.log("Erro: Não foi possível obter uma resposta da API.");
    }
  })
  .catch((err) => {
    console.error("Erro ao se comunicar com a API:", err.message);
    process.exit(1);
  });
