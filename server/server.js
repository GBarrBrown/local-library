const path = require("path");
const express = require("express");
const server = express();

const books = require("./routes/books");

server.use(express.static(path.join(__dirname, "..", "public")));
server.use(express.json());

server.use("/api/v1/books", books);

module.exports = server;
