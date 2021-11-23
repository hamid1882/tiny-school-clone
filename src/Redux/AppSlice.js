import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTab : 1,
  isNavbarShown : false,
}

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.currentTab = action.payload
    },
    toggleNavbar : (state) => {
      state.isNavbarShown = !state.isNavbarShown;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTab, toggleNavbar } = appSlice.actions

// selectors

export const selectCurrentTab = (state) => state.App.currentTab;
export const selectNavbarShown = (state) => state.App.isNavbarShown;

export default appSlice.reducer