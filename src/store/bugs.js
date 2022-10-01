import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
import { createSelector } from 'reselect'

let lastId = 0;

const bugsSlice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        isResolved: false
      })
    },
    bugResolved: (state, action) => {
      const bugIndex= state.findIndex(bug => bug.id === action.payload.id);
      state[bugIndex].isResolved = true
    },
    bugRemoved: (state, action) => {
      state.filter(bug => bug.id !== action.payload.id)
    }
  }
})

export const getUnresolvedBugs = createSelector(
  state=> state.entities.bugs,
  state=> state.entities.project,
  (bugs, projects) => bugs.filter(bug => !bug.isResolved)
)
export const { bugAdded, bugResolved, bugRemoved } = bugsSlice.actions
export default bugsSlice.reducer

