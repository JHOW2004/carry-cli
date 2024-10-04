#!/usr/bin/env node

const { execSync } = require('child_process');
const { sendMessageToAPI } = require('../src/apiClient');

// Função para checar se estamos rodando como administrador
function isAdmin() {
  try {
    if (process.platform === 'win32') {
      execSync('fltmc'); // Comando para verificar privilégios de administrador no Windows
    } else {
      execSync('sudo -n true'); // Testa o sudo no Linux/macOS
    }
    return true;
  } catch (e) {
    return false;
  }
}

// Se não for admin, tentar solicitar elevação de privilégios
if (!isAdmin()) {
  console.log('Este comando requer permissões de administrador.');
  if (process.platform === 'win32') {
    execSync('runas /user:Administrator "node bin/carry.js"');
  } else {
    execSync('sudo node bin/carry.js');
  }
  process.exit(0);
}

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
      console.log("Resposta da Carry:", response);
    } else {
      console.log("Erro: Não foi possível obter uma resposta da API.");
    }
  })
  .catch((err) => {
    console.error("Erro ao se comunicar com a API:", err.message);
    process.exit(1);
  });
