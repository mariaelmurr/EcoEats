import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  errorMessage: '',
  showErrorModal: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setShowErrorModal(state, action) {
      state.showErrorModal = action.payload;
    },
  },
});
export default authSlice.reducer;
