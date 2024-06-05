import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
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
  },
});
export default authSlice.reducer;
