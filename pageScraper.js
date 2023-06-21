const scraperObject = {
    url: 'https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9dex_Nacional',
    async scraper(browser, pokemon){
		let page = await browser.newPage();
		console.log(`Navegando para ${this.url}...`);
		// Navegar à página selecionada
		await page.goto(this.url);
		// Selecionando o(s) pokemon(s) que passarão pelo scrapper
		
		let selectedPokemon = await page.evaluate((_pokemon) => {
			const elements = document.querySelectorAll('.modoclaroescuro > a');
			let elementsArray = [];
			if (!!elements){
				for(let i = 0; i < elements.length; i++){
					if(!!elements[i].innerText){
						if(elements[i].innerText.includes(_pokemon)){
							elementsArray.push(elements[i].href);
						}
					}
				}
			}
			return elementsArray;
		},pokemon); 
		// Buscando elemento que contém o(s) pokemon(s) correspondente(s)
		let scrapedData = [];
		for (let i = 0; i < selectedPokemon.length; i++){
			let data = await scrapCurrentPage(selectedPokemon[i]);
			scrapedData.push(data);
		}
		
		async function scrapCurrentPage(url){
			
			// Passa por esse link e obtem os dados do pokemon
			return new Promise(async(resolve, reject) => {
				let dataObj = {}; 
				let newPage = await browser.newPage();
				await newPage.goto(url);
				// Aguarda o DOM requerido ser renderizado
			
				dataObj['tipos'] = await newPage.evaluate(() => {
					let divs = document.querySelectorAll('.modoclaroescuro table tbody tr td span a font ');
					let tipos = "";
					Array.from(divs).forEach(div => {
						tipos += div.innerText + " ";
					});
					return tipos;
				});
				resolve(dataObj);
				await newPage.close();
			});
		}
		console.log(scrapedData);
	}
}

module.exports = scraperObject;