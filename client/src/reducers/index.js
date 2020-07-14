import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({
  // Each reducer/file has initial state properties to destructure ex: reducer: {destructure}
  alert,
  auth,
  profile,
  post
});
