import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavState {
  navOpen: Boolean,
}

const initialState: NavState = {
  navOpen: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    updateNavBarCollapseStatus(state, action: PayloadAction<Boolean>) {
      const st = state;
      st.navOpen = action.payload;
    },
  },
});

export const {
  updateNavBarCollapseStatus,
} = navSlice.actions;

export default navSlice.reducer;
