const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  fs = require("fs"),
  plainTextContentType = {
    "Content-Type": "text/plain"
  },
  htmlContentType = {
    "Content-Type": "text/html"
  },
  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
      if(errors) {
        console.log("Error reading the file...");
      }
      res.end(data);
    });
  };

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, htmlContentType);
  customReadFile("view/index.html", res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end("POSTED");
});


http.createServer(router.handle).listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
