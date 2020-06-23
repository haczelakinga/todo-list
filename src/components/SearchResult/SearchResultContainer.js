import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {
  getCardsForSearch,
} from '../../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  cards: getCardsForSearch(state),
});

export default connect(mapStateToProps)(SearchResult);
