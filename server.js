const express = require('express');
const routes = require("./router/router.js");
const server = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

server.set("port", process.env.PORT || 3000);

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(routes);

server.listen(server.get("port"), () => {
    console.log("Server started on port " + server.get("port"));
    console.log(`[HOST] http://localhost:3000/`);
})