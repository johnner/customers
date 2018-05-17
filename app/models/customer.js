// app/models/customer.js
const mongoose = require('mongoose');
const autoinc = require('mongoose-plugin-autoinc');

const Schema = mongoose.Schema;
const customerSchema = new Schema({
  customerID:  {type: Number, unique: true},
  name: {
    first: String,
    last: String
  },
  birthday: Date,
  gender: String,
  lastContact: Date,
  customerLifetimeValue: Number
});

// Auto increment customerID field
customerSchema.plugin(autoinc.autoIncrement, {
  model: 'customerSchema',
  field: 'customerID',
  startAt: 1,
  incrementBy: 1
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
