import * as actions from "./actionTypes.js";

let lastId = 0;

export default function reducer(state = [], action) {
  switch(action.type){
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          isResolved: false
        }
      ];
    case actions.BUG_REMOVED:
      return state.filter(bug=> bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, isResolved: true});
    default:
      return state;
  }
}