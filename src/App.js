import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {practiceFunction} from './ducks/reducers/reducer'

function App(props) {
  return (
    <div className="App">
      <button onClick={() => props.practiceFunction('test')}>Submit</button>
    </div>
  );
}

mapStateToProps = (state) => {
  const {reducer, cartReducer} = state
  return {
    reducer, cartReducer
  }
}
mapDispatchToProps = {
  practiceFunction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
