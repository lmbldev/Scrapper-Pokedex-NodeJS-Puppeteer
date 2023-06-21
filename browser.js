const puppeteer = require('puppeteer');

async function startBrowser(){
	let browser;
	try {
	    console.log("Abrindo o navegador...");
	    browser = await puppeteer.launch({
	        headless: false,
	        args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
	    });
	} catch (err) {
	    console.log("Não foi possível criar a instância puppeteer do navegador => : ", err);
	}
	return browser;
}

module.exports = {
	startBrowser
};