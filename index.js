import fetch from 'node-fetch';
import getNonce from './nonce.js';

/**
 * Posts text content to txt.fyi and returns the resulting URL.
 * 
 * @param {string} inputText - The text content to post
 * @returns {Promise<Object>} - Object containing either the output URL or error details
 * @throws {Error} - If the input validation fails
 */
async function sendsession(inputText) {
  // Input validation
  if (!inputText || typeof inputText !== 'string') {
    throw new Error('Input text must be a non-empty string');
  }

  const url = 'https://txt.fyi/post.php';

  // Set up the headers
  const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9,or;q=0.8',
    'cache-control': 'max-age=0',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://txt.fyi',
    'priority': 'u=0, i',
    'referer': 'https://txt.fyi/',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (compatible; txtfyi-poster/1.0)'
  };

  try {
    const nonce = await getNonce();
    
    if (!nonce) {
      throw new Error('Failed to obtain nonce');
    }

    const body = new URLSearchParams({
      txt: inputText,
      url: '',
      go: 'PUBLISH',
      nonce: nonce,
      ref: '/',
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
      redirect: 'follow',
      timeout: 5000
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const location = response.url;
    
    if (location) {
      return {
        success: true,
        output: location,
        timestamp: new Date().toISOString()
      };
    } else {
      return {
        success: false,
        error: 'No Location header found in response',
        timestamp: new Date().toISOString()
      };
    }

  } catch (error) {
    console.error('Error posting to txt.fyi:', error);
    return {
      success: false,
      error: error.message || 'An unknown error occurred',
      timestamp: new Date().toISOString()
    };
  }
}

export default sendsession;