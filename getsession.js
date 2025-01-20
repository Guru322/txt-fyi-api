import fetch from "node-fetch";
import * as cheerio from "cheerio";

/**
 * Retrieves the content of a session from txt.fyi using the session ID
 * @param {string} session_id - The ID of the session to retrieve
 * @returns {Promise<string>} The text content of the session
 * @async
 * @throws {Error} When the fetch request fails or the response cannot be parsed
 */
async function getsession(session_id) {
    const response = await fetch(`https://txt.fyi/${session_id}`);
    const body = await response.text();
    const $ = cheerio.load(body);
    const session = $('p').text();
    return session;
}

export default getsession;