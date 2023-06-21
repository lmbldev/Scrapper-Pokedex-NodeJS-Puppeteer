const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance, pokemon){
	let browser;
	try{
		browser = await browserInstance;
		let scrapedData = {};
		
		scrapedData = await pageScraper.scraper(browser, pokemon);
		await browser.close();
		console.log(scrapedData)
	}
	catch(err){
		console.log("Não pode resolver a instância do navegador => ", err);
	}
}
module.exports = (browserInstance, pokemon) => scrapeAll(browserInstance, pokemon)