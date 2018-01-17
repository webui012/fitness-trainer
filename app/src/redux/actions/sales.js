import { PAGE_SALES_WAIT, PAGE_SALES_SUCCESS } from '../constants';

export const waitSalesPage = () => ({
  type: PAGE_SALES_WAIT,
});

export const waitSalesPageEnd = data => ({
  type: PAGE_SALES_SUCCESS,
  data,
});
