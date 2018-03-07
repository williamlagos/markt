import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import Catalog from './Catalog'
import Product from './Product'
import Request from './Request'
import Bag from './Bag'

class Content extends Component {
  render () {
    const nav = this.props.nav
    const api = this.props.api
    switch (nav.choice) {
      case 'CART': return <Bag url={api} id={this.props.id}/>
      case 'PROFILE': return <Profile url={api}/>
      case 'REQUESTS': return <Request url={api} id={this.props.id}/>
      case 'PRODUCTS': return <Product url={api} data=''/>
      default: return <Catalog url={api}/>
    }
  }
}

const mapStateToProps = (state) => ({ api: state.fetch, nav: state.navigate })

const ContentContainer = connect(mapStateToProps)(Content)

export default ContentContainer
