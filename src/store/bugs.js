import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = toolkitRaw.default ?? toolkitRaw;

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

export const { bugAdded, bugResolved, bugRemoved } = bugsSlice.actions
export default bugsSlice.reducer

