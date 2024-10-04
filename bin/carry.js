#!/usr/bin/env node

import chalk from 'chalk';
import * as marked from 'marked';  // Corrige a importação do marked
import TerminalRenderer from 'marked-terminal';
import sendMessageToAPI from '../src/apiClient.js';  // Importe o default export

// Configura o 'marked' para renderizar markdown no terminal
marked.setOptions({
  renderer: new TerminalRenderer(),
});

// Captura os argumentos do terminal
const args = process.argv.slice(2);

// Verifica se o usuário passou uma pergunta válida
if (args.length === 0) {
  console.error(chalk.red('*Erro:* Você deve fornecer uma pergunta entre aspas.'));
  console.log(chalk.blue('*Uso:* carry "sua pergunta aqui"'));
  process.exit(1);
}

// Junta todos os argumentos em uma única string
const question = args.join(' ');

// Envia a mensagem para a API e lida com possíveis erros
sendMessageToAPI(question)
  .then((response) => {
    if (response) {
      // Primeiro formata o texto com markdown, depois aplica a cor verde
      const formattedResponse = marked.marked(response);
      console.log('Carry:' + chalk.green(formattedResponse));
    } else {
      console.log(chalk.red('*Erro:* Não foi possível obter uma resposta da API.'));
    }
  })
  .catch((err) => {
    console.error(chalk.red('*Erro ao se comunicar com a API:*') + err.message);
    process.exit(1);
  });
