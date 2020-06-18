import {connect} from 'react-redux';
import Home from './Home';
import { createAction_moveCard } from '../../../redux/cardRedux';

const mapStateToProps = state => ({
  title: state.title,
  subtitle: state.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);