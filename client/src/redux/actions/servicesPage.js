import {
  REQUEST_SERVICES_PAGE,
  SUCCESS_SERVICES_PAGE
} from '../constants';

export const servicesPageRequest = () => ({
  type: REQUEST_SERVICES_PAGE,
});

export const servicesPageSuccess = data => ({
  type: SUCCESS_SERVICES_PAGE,
  data,
});