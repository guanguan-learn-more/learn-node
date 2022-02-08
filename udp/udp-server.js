const dgram = require("dgram");
const server = dgram.createSocket("udp4");
server.on("message", (message, rinfo) => {
  console.log(
    "UDP server got :" + message + "from" + rinfo.port + rinfo.address
  );
});
server.on("listening", () => {
  const address = server.address();
  console.log("UDP listening", address.address, address.port);
});
server.bind(41234);
