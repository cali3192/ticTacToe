// const express = require("express");
// const path = require("path");

// // const test = require("./dist");

// const app = express();
// // console.log(__dirname + "/src");
// // app.use(express.static("./dist"));

// app.get('/',(request,response)=>{
//   response.send(‘Hello world’);
// });

// // app.use('')

// const port = 2000;
// app.listen(
//   (port,
//   () => {
//     console.log(`listening on port ${port}`);
//   })
// );

const express = require("express"),
  app = express();

// app.get("/", (request, response) => {
//   response.send(JSON.stringify(`Hello world`));
// });

app.use(express.static(__dirname + "/dist"));

//Binding the server to a port(3000)
const port = 3000;
app.listen(port, () => console.log(`express server started at port ${port}`));
