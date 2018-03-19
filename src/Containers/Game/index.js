import { connect } from 'react-redux';
import Component from '../../Components/Game';
import { loadItems } from '../../Actions/Questions';


const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems())
});


export default connect(null, mapDispatchToProps)(Component);
