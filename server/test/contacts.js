var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
const SERVER_PORT = '8080';
const FRONT_PORT = '6289';
const PROTOCOL = 'http://';
const COLON = ':';
const ENVIRONMENT = 'localhost';

const SERVER_ENVIRONMENT = PROTOCOL + ENVIRONMENT + COLON + SERVER_PORT;
const FRONT_ENVIRONMENT = PROTOCOL + ENVIRONMENT + COLON + FRONT_PORT;



chai.use(chaiHttp);


describe('This is method for test contacts', () => {
    it('GET /contacts', (done) => {
    chai.request(SERVER_ENVIRONMENT)
        .get('/contacts')
        .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.ok).to.equal(true);
        expect(res.header).to.have.property('access-control-allow-origin').to.equals(FRONT_ENVIRONMENT);
        expect(res.type).to.equal('application/json');
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('title');
        expect(res.body).to.have.property('mapData');
    done();
});
});
});