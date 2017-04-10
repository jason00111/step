import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from '../../../../configuration/testSetup'
import Login from '../Login'

describe( '<Login />', () => {

  it( 'should render button with class \'login-button\'', () =>
    expect( shallow( <Login /> )
      .find( '.login-button' ).length).to.equal( 1 )
  )

  context( 'renders nested children', () => {
    const wrapper = mount( <Login couldDos={ fakeCouldDos } project={ fakeProject } /> )

    it( 'should render a <Heading />', () =>
      expect( wrapper.find( 'Heading' ).length ).to.equal( 1 )
    )

    it( 'should render a <RowList />', () =>
      expect( wrapper.find( 'RowList' ).length ).to.equal( 1 )
    )

  })
})
