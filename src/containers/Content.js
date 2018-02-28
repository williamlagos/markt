import React, { Component } from 'react'
import { connect } from 'react-redux'
import Detail from '../components/Detail'
import List from '../components/List'
import axios from 'axios'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = { items: '' }
    this.key = sessionStorage.getItem('token')
    this.api = this.props.api
  }

  componentDidMount () {
    axios.get(this.api + '/api/profiles/?side=2', {
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let items = response.data.results
      this.setState({ items })
    })
  }

  render () {
    if (this.props.nav.show === 2) return <Detail/>
    else return <List items={this.state.items} type={this.props.nav.type}/>
    /* switch(this.props.change) {
      case 'bag': return (<Cart url={this.props.url}/>);
      case 'catalog': return (<Catalog url={this.props.url}/>);
      case 'request': return (<Request url={this.props.url}/>);
      case 'product': return (<Product url={this.props.url} data={this.props.data}/>);
    } */
  }
}

const mapStateToProps = (state) => ({ api: state.fetch, nav: state.navigate })

const ContentContainer = connect(mapStateToProps)(Content)

export default ContentContainer
