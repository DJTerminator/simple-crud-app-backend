// import express from "express";
// import mongoose from "mongoose";
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const port = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/product", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from NODE API using nodemon");
});

mongoose
  .connect(
    "mongodb+srv://digvijaysinghrawat:6odZ1v0xrTsUZUp0@backenddb.btdz14s.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log("SERVER RUNNING");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
