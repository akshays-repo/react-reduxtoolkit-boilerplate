import { callApi } from '../services/callApi';
import { API } from '../app/apiEndpoints';

// API for the users

type getUsersListType = {
  groups?: number | string | undefined;
  username?: string | undefined;
  limit?: string;
};

export const getUsersList = async (options: getUsersListType) => {};
