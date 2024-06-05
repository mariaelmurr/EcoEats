import * as RNFS from '@dr.pogodin/react-native-fs';
import {authSlice} from '../reducers/authReducer';

const usersFilePath = `${RNFS.DocumentDirectoryPath}/users.json`;

const getUsersFromFile = async () => {
  try {
    const fileExists = await RNFS.exists(usersFilePath);
    if (!fileExists) {
      await RNFS.writeFile(usersFilePath, JSON.stringify([]), 'utf8');
    }
    const usersData = await RNFS.readFile(usersFilePath, 'utf8');
    return JSON.parse(usersData);
  } catch (error) {
    console.error('Error reading users file:', error);
    return [];
  }
};

const saveUsersToFile = async users => {
  try {
    await RNFS.writeFile(usersFilePath, JSON.stringify(users), 'utf8');
  } catch (error) {
    console.error('Error writing users file:', error);
  }
};

export const signup = obj => {
  return async dispatch => {
    dispatch(authSlice.actions.setLoading(true));
    try {
      const users = await getUsersFromFile();
      const userExists = users.some(user => user.email === obj.email);
      if (userExists) {
        throw new Error('User already registered');
      } else {
        users.push(obj);
        await saveUsersToFile(users);
        dispatch(authSlice.actions.setUser(obj));
      }
    } catch (error) {
      console.error('Signup error:', error);
      console.log(typeof error);
      //   dispatch(authSlice.actions.setErrorMessage(error));
      //   dispatch(authSlice.actions.setShowErrorModal(true));
    } finally {
      dispatch(authSlice.actions.setLoading(false));
    }
  };
};

export const clearErrorMessage = () => {
  return async dispatch => {
    dispatch(authSlice.actions.setErrorMessage(''));
    dispatch(authSlice.actions.setShowErrorModal(false));
  };
};
