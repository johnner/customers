// app/routes/api.js

const express = require('express');
const Customer = require('../models/customer');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'apis' });
});

// get all customers
router.get('/customers', function(req, res) {
  Customer.find({}).then(eachOne => {
    res.json(eachOne);
  })
});

// add new customer
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


module.exports = router;
