import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showProducts } from '../actions'
import Grid from '../components/Grid'
import axios from 'axios'

class Catalog extends Component {
  constructor (props) {
    super(props)
    this.state = { items: [] }
    this.key = sessionStorage.getItem('token')
    this.api = this.props.url
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    // Providers fetching
    axios.get(this.api + '/api/profiles/?side=2', {
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let items = response.data.results
      this.setState({ items })
    })
  }

  handleClick (provider) {
    this.props.showProducts(`?provider=${provider}`)
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <Grid items={this.state.items} select={this.handleClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ api: state.fetch })
const mapDispatchToProps = { showProducts }

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog)

export default CatalogContainer
