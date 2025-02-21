# txt.fyi Utility Functions

[![Node.js Package](https://github.com/Guru322/txt-fyi-api/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Guru322/txt-fyi-api/actions/workflows/npm-publish.yml)
## Overview
This package provides two main functions for interacting with txt.fyi:
- `sendsession`: Posts new text content to txt.fyi and returns the URL SLUG as session ID
- `getsession`: Retrieves existing text content from txt.fyi using session ID

## Installation

```bash
# Install
npm install txt-fyi-api 

# Import the functions in your project
import sendsession from "txt-fyi-api";
import getsession from "txt-fyi-api";
```

## Usage Examples

### Posting Content
```javascript
const postExample = async () => {
    try {
        const result = await sendsession("Hello, World!");
        if (result.success) {
            console.log(`Post URL: https://txt.fyi/${result.output}`);
        }
    } catch (error) {
        console.error('Failed to post:', error.message);
    }
}
```

### Retrieving Content
```javascript
const getExample = async () => {
    try {
        // Fetch content using a session ID
        const content = await getsession("abc123");
        console.log('Retrieved content:', content);
    } catch (error) {
        console.error('Failed to retrieve content:', error.message);
    }
}
```


