// customer.spec.js

process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let Customer = require('../app/models/customer');
chai.use(chaiHttp);

describe('Customers', () => {
  beforeEach((done) => { // before each test we empty the database
    Customer.remove({}, (err) => done());
  });

  /* Test the /GET route */
  describe('/GET customers', () => {
    it('it should GET all the customers', (done) => {
      chai.request(server)
      .get('/api/customers')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });
});