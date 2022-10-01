import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = toolkitRaw.default ?? toolkitRaw;

let lastProjectId = 0;

const projectSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push({
        id: ++lastProjectId,
        name: action.payload.projectName
      })
    }
  }
})

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer