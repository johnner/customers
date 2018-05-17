// app/routes/api.js

const express = require('express');
const Customer = require('../models/customer');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'apis' });
});

/**
 * GET all customers
 */
router.get('/customers', function(req, res) {
  Customer.find({}).then(eachOne => {
    res.json(eachOne);
  })
});

/**
 * ADD new customer
 */
router.post('/customers', function(req, res) {
  let { name } = req.body;
  name = name || {};
  Customer.create({
    name: {
     first: name.first,
     last: name.last
    },
  }).then(customer => {
    res.json(customer)
  });
});

/*
 * GET /customer/:id route to retrieve a customer
 */
router.get('/customers/:id', function (req, res) {
  Customer.findById(req.params.id, (err, book) => {
    if(err) res.send(err);
    //If no errors, send it back to the client
    res.json(book);
  });
});


/**
 * UPDATE customer by id
 */
router.put('/customers/:id', function (req, res) {
  Customer.findById({_id: req.params.id}, (err, customer) => {
    if(err) res.send(err);
    Object.assign(customer, req.body).save((err, customer) => {
      if(err) res.send(err);
      res.json({ message: 'Customer updated!', customer });
    });
  });
});



module.exports = router;
