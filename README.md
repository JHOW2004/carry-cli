# Carry CLI

**Carry CLI** é uma interface de linha de comando (CLI) que permite que você faça perguntas diretamente ao **Carry** pelo CMD. A ferramenta foi desenvolvida para facilitar o uso sem a necessidade de uma interface gráfica.

Caso queira usar o Carry em seu potencial máximo, acesse:

https://carrybr.vercel.app/

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
- git (para clonagem do repositório)

### Instalação Global

Para instalar o **Carry CLI** globalmente no seu sistema, siga os passos abaixo:

1. Primeiro, você precisa ter o Node.js e o npm instalados no seu computador. Verifique se já os possui rodando:

    ```bash
    node -v
    npm -v
    ```

2. Clone este repositório com o seguinte comando:

    ```bash
    git clone https://github.com/JHOW2004/carry-cli.git
    ```

3. Navegue até a pasta criada:

    ```bash
    cd carry-cli
    ```

4. Execute o seguinte comando e aguarde a instalação dos pacotes:

    ```bash
    npm install
    ```

5. Caso você esteja em um Mac ou em alguma distribuição Linux, execute este comando (se não, ignore este passo):

    ```bash
    chmod +x bin/carry.js
    ```

6. Para poder usar este pacote globalmente, execute o seguinte comando:

    ```bash
    npm install -g .
    ```

Isso tornará o comando `carry` disponível globalmente no terminal e pronto para usar.

## Como Usar

Após a instalação, você pode utilizar a CLI executando o comando `carry` seguido da sua pergunta. A ferramenta enviará a pergunta para a API do chatbot e retornará a resposta diretamente no terminal.

### Comando Básico

Use o seguinte formato para interagir com o Carry:

    ```bash
    carry "Sua pergunta aqui"
    ```

### Parâmetros

- **Pergunta**: Você deve passar sua pergunta como um argumento em formato de string. Certifique-se de colocar a pergunta entre aspas para garantir que ela seja capturada corretamente pelo terminal.

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