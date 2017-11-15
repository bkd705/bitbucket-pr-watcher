import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { server } from '../../index'

const expect = chai.expect
chai.use(chaiHttp)

describe('routes: Bitbucket', () => {
  describe('POST: /', () => {
    it('should response with 200 status', () => {
      chai
        .request(server)
        .post('/')
        .end((err, res) => {
          expect(res.status).to.eq(200)
        })
    })
  })
})
