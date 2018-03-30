import { connect } from 'react-redux'
import Bar from '../components/Bar'
import { showCart, showRequests, showProviders, showProducts, showProfile } from '../actions'

const mapStateToProps = (state) => ({ api: state.fetch.url })
const mapDispatchToProps = { showCart, showRequests, showProviders, showProducts, showProfile }

const Navigation = connect(mapStateToProps, mapDispatchToProps)(Bar)

export default Navigation
