import { ALL } from '../redux/constants';

const isAuthorized = (pageRole, stateRole) => {
   if (pageRole !== stateRole && pageRole !== ALL) {
      return false;
    } else {
      return true;
    }
  }
export default isAuthorized
