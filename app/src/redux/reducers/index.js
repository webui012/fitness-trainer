import { combineReducers } from 'redux';
import error from './sendDataErrorMessage';
import spinner from './sendData';
<<<<<<< HEAD
import load from './pageLoading';

=======
>>>>>>> 6baacf934cf5e81ec22d5d5671671aca37de5f0d

const rootReducer = combineReducers({
  error,
  spinner,
  load
});

export default rootReducer;
