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
  let { name, birthday, gender, customerLifetimeValue } = req.body;
  name = name || {};
  Customer.create({
    name: {
     first: name.first,
     last: name.last
    },
    birthday,
    gender,
    customerLifetimeValue
  }).then(customer => {
    res.json(customer)
  });
});

/*
 * GET /customer/:id route to retrieve a customer
 */
router.get('/customers/:id', function (req, res) {
  Customer.findOne({ 'customerID': req.params.id}, (err, customer) => {
      if(err) res.send(err);
      res.json(customer);
  });
});


/**
 * UPDATE customer by id
 */
router.put('/customers/:id', function (req, res) {
  Customer.findOne({ 'customerID': req.params.id }, (err, customer) => {
    if(err) res.send(err);
    Object.assign(customer, req.body).save((err, customer) => {
      if(err) res.send(err);
      res.json({ message: 'Customer updated!', customer });
    });
  });
});



/*
 * DEKETE /customer/:id route to delete a customer
 */
router.delete('/customers/:id', function (req, res) {
  Customer.findOneAndRemove({ 'customerID': req.params.id }, (err, customer) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Customer successfully deleted",
      id: customer.customerID
    };
    return res.status(200).send(response);
  });
});


module.exports = router;
