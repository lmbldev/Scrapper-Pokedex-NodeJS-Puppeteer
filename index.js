const browserObject = require('./browser');
const scraperController = require('./pageController');

//Inicía e cria uma instância do navegador
let browserInstance = browserObject.startBrowser();
// Variável para digitar o nome do pokémon
let pokemon = 'Pikachu';
// Passa a instância do navegador para o controlador scraper
scraperController(browserInstance, pokemon);
