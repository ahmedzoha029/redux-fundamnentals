import * as toolkitRaw from '@reduxjs/toolkit';
const { createAction, createReducer } = toolkitRaw.default ?? toolkitRaw;

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");


//Reducers
let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      isResolved: false
    })
  },
  [bugResolved.type]: (state, action) => {
    const bugIndex= state.findIndex(bug => bug.id === action.payload.id);
    state[bugIndex].isResolved = true
  },
  [bugRemoved.type]: (state, action) => {
    state.filter(bug => bug.id !== action.payload.id)
  }
});
