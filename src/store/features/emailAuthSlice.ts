import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface emailAuthState {
  email: Number;
  verificationId: Number;
  verificationCode: Number;
  authStatus: Boolean;
}

const initialState: emailAuthState = {
  email: 0,
  verificationId: 0,
  verificationCode: 0,
  authStatus: true,
};

const emailAuthSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    updateEmail(state, action: PayloadAction<Number>) {
      const st = state;
      st.email = action.payload;
    },
    clearEmail(state){
      const st = state;
      st.email = 0;
    },
    updateVerificationId(state, action: PayloadAction<Number>) {
      const st = state;
      st.verificationId = action.payload;
    },
    updateVerificationCode(state, action: PayloadAction<Number>) {
      const st = state;
      st.verificationCode = action.payload;
    },
    updateAuthStatus(state, action: PayloadAction<Boolean>) {
      const st = state;
      st.authStatus = action.payload;
    },
  },
});

export const {
  updateEmail,
  clearEmail,
  updateVerificationId,
  updateVerificationCode,
  updateAuthStatus,
} = emailAuthSlice.actions;

export default emailAuthSlice.reducer;