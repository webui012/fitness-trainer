import { HOMEPAGE_REQUEST } from '../constants';

export const fetchHomepage = () => ({
  type: HOMEPAGE_REQUEST,
  isLoading: true,
});
