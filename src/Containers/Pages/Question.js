import { connect } from 'react-redux';
import { loadItem } from '../../Actions/Questions';
import Component from '../../Components/Pages/Questions/Question';
import Selector from '../../Selectors/Pages/Questions/Question';


const mapDispatchToProps = dispatch => ({
  loadItem: (id) => dispatch(loadItem(id))
});


export default connect(Selector, mapDispatchToProps)(Component);
