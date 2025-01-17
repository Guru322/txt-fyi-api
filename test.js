import sendsession from "./index.js";
let json = { "name": "John", "age": 30, "city": "New York" };

const inputText = JSON.stringify(json);
sendsession(inputText).then((location) => {
  console.log('Location:', location);
});