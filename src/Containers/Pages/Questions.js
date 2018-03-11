import { connect } from 'react-redux';
import Component from '../../Components/Pages/Questions';
import { loadItems } from '../../Actions/Questions';
import Selector from '../../Selectors/Pages/Questions';


const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems())
});


export default connect(Selector, mapDispatchToProps)(Component);
