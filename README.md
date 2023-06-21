# Projeto do Web Scraper usando Node.js e Puppeteer
## Este é um projeto de exemplo que demonstra como criar um web scraper utilizando o Node.js e a biblioteca Puppeteer. O web scraper é capaz de extrair dados de páginas da web de forma automatizada. Este webscraper está programada para buscar os dados de um pokémon no link: "https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9dex_Nacional" e exibir seu tipo. 
 
## Requisitos
### Certifique-se de ter os seguintes requisitos instalados em sua máquina:

Node.js (versão 18.16.0)
NPM (gerenciador de pacotes do Node.js)

## Instalação
### Siga as etapas abaixo para configurar e executar o projeto em sua máquina local:

1- Abra um terminal.

2- Clone o repositório do projeto:
"git clone https://github.com/lmbldev/Scrapper-Pokedex-NodeJS-Puppeteer.git"

3- Acesse o diretório do projeto.

4- Certifique-se que o terminal esteja executando no diretório do projeto.

5- Instale as dependências do projeto:
"npm install"

## Configuração
### Antes de executar o web scraper, é necessário fazer uma configuração. Siga os passos abaixo:

1- Abra o arquivo index.js localizado na pasta raíz.

2- Modifique o valor da variável "pokemon" para o nome do pokémon que deseja buscar:
Exemplo:
![image](https://github.com/lmbldev/Scrapper-Pokedex-NodeJS-Puppeteer/assets/121053332/b4ff5ddc-7e77-4860-8395-eb4819c0a4cc)

## Execução
### Após a configuração, você pode executar o web scraper. No diretório do projeto, execute o seguinte comando:
"npm run start".

O scraper irá abrir um navegador Chromium, que controlado pelo Puppeteer, navegará até a página configurada, extrairá os dados do elemento alvo e os exibirá no console.


