import React, { Component } from 'react'
import { connect } from 'react-redux'
import Detail from '../components/Detail'

class Progress extends Component {

  render () {
    const item = this.props.item
    const time = new Date(Date.parse(item.estimated)).toLocaleString()
    const address = `Saída: ${item.provider.address}`
    const estimated = `Tempo solicitado: ${time}`
    return (
      <div className="container-fluid">
        <div className="row">
          <Detail image="./assets/delivery.jpg" text={address} title={estimated}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ api: state.fetch, item: state.navigate.item })

const ProgressContainer = connect(mapStateToProps)(Progress)

export default ProgressContainer
