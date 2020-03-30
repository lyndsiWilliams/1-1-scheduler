// React
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { getTimes } from '../actions';


const Schedule = props => {
  console.log('SCHEDULE COMPONENT PROPS', props);

  return (
    <div>
      Schedule Page Placeholder Text!
      <button onClick={props.getTimes}>Unleash the data!</button>
    </div>
  );
};

const mapStateToProps = state => ({
  times: state.timesReducer.times,
  error: state.timesReducer.error,
  isFetching: state.timesReducer.isFetching
});


export default connect (
  mapStateToProps,
  { getTimes }
)(Schedule);