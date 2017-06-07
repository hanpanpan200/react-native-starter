import { connect } from 'react-redux'
import { getList } from '../redux/modules/contacts'
import Contacts from '../components/Contacts'

function mapStateToProps(state) {
  return {
    contacts: state.contacts.list,
    loading: state.contacts.loading,
  }
}

export default connect(mapStateToProps, { getList })(Contacts)
