// Action types
export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

//Action Creators
export const bugAdded =  description => ({
  type: BUG_ADDED,
  payload: {
    description
  }
}
)

export const bugRemoved = id => ({
type: BUG_REMOVED,
payload: {
  id
}
})

export const bugResolved = id => ({
type: BUG_RESOLVED,
payload: {
  id
}
})

//Reducers
let lastId = 0;

export default function reducer(state = [], action) {
  switch(action.type){
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          isResolved: false
        }
      ];
    case BUG_REMOVED:
      return state.filter(bug=> bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, isResolved: true});
    default:
      return state;
  }
}
