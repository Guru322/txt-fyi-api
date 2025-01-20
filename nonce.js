import fetch from "node-fetch";
import * as cheerio from "cheerio";

/**
 * Fetches a nonce (number used once) value from txt.fyi website.
 * @async
 * @function getNonce
 * @returns {Promise<string>} The nonce value retrieved from the input field
 * @throws {Error} If the fetch request fails or if parsing fails
 */
async function getNonce() {
    const response = await fetch('https://txt.fyi');
    const body = await response.text();
    const $ = cheerio.load(body);
    const nonce = $('input[name="nonce"]').val();
    return nonce;
}

export default getNonce;