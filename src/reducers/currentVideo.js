import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //copy our state
  //for every key in action object
  //update matching coptied states key to action keys val
  //return new copied state

  let newState = {};
  for (let key in state) {
    newState[key] = state[key];
  }

  for (let key in action) {
    newState[key] = action[key];
  }

  return newState;
};

export default currentVideoReducer;
