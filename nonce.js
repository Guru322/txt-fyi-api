import fetch from "node-fetch";
import * as cheerio from "cheerio";

async function getNonce() {
    const response = await fetch('https://txt.fyi');
    const body = await response.text();
    const $ = cheerio.load(body);
    const nonce = $('input[name="nonce"]').val();
    return nonce;
}

export default getNonce;