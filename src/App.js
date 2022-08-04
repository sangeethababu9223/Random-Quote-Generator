import './App.scss';
import Main from './components/Main';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) =>{
  return { 
    quotes: state.quotes
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
} 

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App;
