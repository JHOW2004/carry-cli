# Carry CLI

**Carry CLI** é uma interface de linha de comando (CLI) que permite que você faça perguntas diretamente ao **Carry** pelo CMD. A ferramenta foi desenvolvida para facilitar o uso sem a necessidade de uma interface

## Índice

- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Exemplos](#exemplos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- git (Para clonagem de repositorio)

### Instalação Global

Para instalar o **Carry CLI** globalmente no seu sistema, siga os passos abaixo:

1. Primeiro, você precisa ter o Node.js e npm instalados no seu computador. Verifique se já possui rodando:

    ```bash
    node -v
    npm -v
    ```

2. clone este repositorio com o seguinte comando:

    ```bash
    git clone https://github.com/JHOW2004/carry-cli.git
    ```

3. Navegue até a pasta criada

    ```bash
    cd carry-cli
    ```

4. execute o seguinte comando e espere terminar a instalação dos pacotes:

    ```bash
    npm install
    ```

5. caso você esteja em um Mac ou alguma distribuição Linux, execute este comando (caso não, ignore este passo):

    ```bash
    chmod +x bin/carry.js
    ```

6. E para poder usar globalmente este pacote execute este comando:

    ```bash
    npm install -g .
    ```

Isso tornará o comando `carry` disponível globalmente no terminal e pronto para usar.

## Como Usar

Após a instalação, você pode utilizar a CLI executando o comando `carry` seguido da sua pergunta. A ferramenta irá enviar a pergunta para a API do chatbot e retornará a resposta diretamente no terminal.

### Comando Básico

Use o seguinte formato para interagir com a Carry:

    ```bash
    carry "Sua pergunta aqui"
    ```

### Parâmetros

- **Pergunta**: Você deve passar sua pergunta como um argumento de string, por isso certifique-se de colocar a pergunta entre aspas para garantir que ela seja capturada corretamente pelo terminal.

### Exemplo:

Aqui está um exemplo de como usar o **Carry CLI** para fazer uma pergunta simples:

    ```bash
    carry "Quem é seu criador?"
    ```

### Saída Esperada

A resposta será algo como:

    ```bash
    Resposta da Carry: "Meu criador é Jonathas Pereira Gonçalves, CEO e CTO da Jhow Technology, criador da ferramenta Note Speech..."
    ```

## Exemplos

### 2. Perguntando sobre o nome

    ```bash
    carry "Qual é o seu nome?"
    ```

Resposta esperada:

    ```bash
    Carry: "Meu nome é Carry."
    ```

## Contribuição

Se você quiser contribuir para o **Carry CLI**, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
4. Faça push para a branch: `git push origin minha-feature`.
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
