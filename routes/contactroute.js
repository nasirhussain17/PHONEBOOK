const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const Contacts = require("../models/contact");

const contactRouter = express.Router();

const { Validator } = require('node-input-validator');

contactRouter.use(bodyParser.json());

contactRouter
  .route("/")
  .get((req, res, next) => {
    Contacts.find({})
      .then(
        data => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(data);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Contacts.create(req.body)
      .then(
        (data) => {
          console.log("Contact Created ", data);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(data);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    Contacts.remove({})
      .then(
        resp => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports=contactRouter;
