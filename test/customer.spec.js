// customer.spec.js

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../server');
let Customer = require('../app/models/customer');
chai.use(chaiHttp);

let customer = {
  name: { first: 'Test', last: 'LastName' },
  birthday: new Date(),
  gender: 'f',
  customerLifetimeValue: 1.0
};

describe('Customers', () => {
  beforeEach((done) => { // before each test we empty the database
    Customer.remove({}, (err) => done());

  });

  /* Test GET customer list route */
  describe('/GET customers', () => {
    it('it should GET all the customers', (done) => {
      chai.request(server)
      .get('/api/customers')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });

  /* Test CREATE new customer */
  describe('/POST customers ', () => {
    let id = null;
    it('it should CREATE new customer', (done) => {
      chai.request(server)
      .post('/api/customers')
      .set('content-type', 'application/json')
      .send(customer)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('customerID');
        id = res.body.customerID;
        done();
      });
    });
  });
});
