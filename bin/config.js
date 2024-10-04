#!/usr/bin/env node

const { execSync } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

// Função para checar se estamos rodando como administrador
function isAdmin() {
  try {
    if (os.platform() === 'win32') {
      execSync('fltmc'); // Verifica privilégios no Windows
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
  if (os.platform() === 'win32') {
    execSync('runas /user:Administrator "node bin/config.js"');
  } else {
    execSync('sudo node bin/config.js');
  }
  process.exit(0);
}

// Caminho do binário principal
const binPath = path.resolve(__dirname, 'carry.js');

try {
  // Verifica se está rodando em sistemas Unix/Linux/macOS
  if (os.platform() !== 'win32') {
    // Checa se o binário tem permissões de execução
    const stat = fs.statSync(binPath);
    if (!(stat.mode & 0o100)) {
      // Ajusta as permissões, caso necessário
      execSync(`chmod +x ${binPath}`);
      console.log('Permissões ajustadas para sistemas Unix.');
    } else {
      console.log('Permissões já estão corretas.');
    }
  } else {
    console.log('No Windows, permissões não são necessárias.');
  }

  // Verifica se o binário foi instalado corretamente
  console.log('Validando se o binário foi instalado corretamente...');

  const globalBinPath = execSync('npm bin -g').toString().trim();
  const cliCommand = path.join(globalBinPath, 'carry');

  if (!fs.existsSync(cliCommand)) {
    console.error('Erro: O binário não foi instalado corretamente. Verifique o PATH.');
    process.exit(1);
  }

  console.log('Configuração concluída com sucesso! O comando `carry` está pronto para uso.');
} catch (error) {
  console.error('Erro durante a configuração:', error.message);
  process.exit(1);
}
