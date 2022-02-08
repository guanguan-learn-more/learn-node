process.on("message", function (m) {
  console.log("CHILD got message:", m);
});
setInterval(() => {
  process.send({ foo: "bar" });
}, 1000);
