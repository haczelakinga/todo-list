import {connect} from 'react-redux';
import {SearchResult} from './SearchResult';
import {
  getCardsForSearch,
} from '../../../redux/cardRedux';

const mapStateToProps = (state, props) => {
  return ({
    cards: getCardsForSearch(state, props.match.params.searchString),
  }
  );
};

export default connect(mapStateToProps)(SearchResult);
