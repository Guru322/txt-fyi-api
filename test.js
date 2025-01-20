import sendsession from "./index.js";
import getsession from "./getsession.js";
let json = { "name": "John", "age": 30, "city": "New York" };
async function test() {
  const inputText = JSON.stringify(json);
  let session_id = await sendsession(inputText);
  console.log('session id:', session_id.output);
  let session = await getsession(session_id.output);
  console.log('Session:', session);
}
test();