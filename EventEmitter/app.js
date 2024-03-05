const Events = require("./EventEmitter");

class EventEmitter extends Events { }

const myE = new EventEmitter();

// myE.on("foo", () => {
//   console.log("An Event foo Occured. 2");
// });
// myE.on("foo", () => {
//   console.log("An Event foo Occured. 1");
// });
// myE.on("foo", (x) => {
//   console.log(`An Event foo Occured. 3: ${x}`);
// });
myE.once("bar", (x) => {
  console.log(`An Event bar Occured.1`);
});
myE.once("bar", (x) => {
  console.log(`An Event bar Occured.2`);
});

// myE.emit("foo");
myE.emit("bar");
myE.emit("bar");
// myE.emit("foo", "oombu");
