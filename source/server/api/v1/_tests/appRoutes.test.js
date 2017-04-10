import fs from 'fs'
import path from 'path'
import { expect, chai } from '../../../../../configuration/testSetup'
import server from '../../../server'

describe( 'app routes', () => {

  context( '/', () => {

    it( 'should return app html', () => {

      chai.request( server )
        .get( '/' )
        .then( response => {
          const responseHTML = response.text
          const expectedHTML = fs.readFileSync(path.join(__dirname, '/../../../../../public/index.html'), 'utf8')
          expect(responseHTML).to.equal(expectedHTML)
        })
        .catch(error => console.error('doesn\'t return app html: ', error) ) //eslint-disable-line
    })

  })

})
