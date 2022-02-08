const http = require("http");

// ========= http request get =========
const options = {
  hostname: "127.0.0.1",
  port: 1334,
  path: "/getFile",
  method: "GET",
};

const req = http.request(options, function (res) {
  console.log("STATUS: " + res.statusCode);
  console.log("HEADERS: " + JSON.stringify(res.headers));
  res.setEncoding("utf8");
  res.on("data", function (chunk) {
    console.log('chunk',chunk);
  });
});
req.end();

// ======== http request post =======
// const postData = JSON.stringify({
//     msg: "Hello World!"
//   });

// let options = {
//   hostname: "127.0.0.1",
//   port: 1334,
//   path: "/post",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Content-Length": postData.length
//   }
// };

// const req = http.request(options, function(res) {
//   console.log("STATUS: " + res.statusCode);
//   console.log("HEADERS: " + JSON.stringify(res.headers));
//   res.setEncoding("utf8");
//   res.on("data", function(chunk) {
//     console.log("BODY: " + chunk);
//   });
// });

// req.on("error", function(e) {
//   console.log("problem with request: " + e.message);
// });

// req.write(postData);
// req.end();

// const axios = require("axios");
// axios
//   .get("localhost:8000/getData")
//   .then((res) => {
//     console.log(`状态码: ${res.statusCode}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
