import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../app/apiEndpoints';
import { LOCAL_STORE } from '../constants/localStorageKeys';

export interface BreedList {
  id: number;
  name: string;
}

export interface StateList {
  id: number;
  code: string;
  name: string;
}

export interface DistrictList {
  id: number;
  name: string;
}

export interface CityList {
  id: number;
  name: string;
}

export interface TagDropdownList {
  id: number;
  tag_no: string;
  is_female: boolean;
  is_heifer: boolean;
  is_sick: boolean;
  is_pregnant: boolean;
}

export const masterDropDownApi = createApi({
  reducerPath: 'masterdropdowns',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_GATEWAY,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem(LOCAL_STORE.TOKEN);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', token ? `Token ${token}` : '');
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStateById: builder.query<StateList, number | string>({
      query: (countryId: number) => `/api/master/state/${countryId}/`,
    }),

    getTagsById: builder.query<TagDropdownList[], number | string>({
      query: (farmId: number | string) => `/api/cattle/d_list/${farmId}/`,
    }),

    getDistrictById: builder.query<DistrictList, number>({
      query: (stateId: number) => `api/master/district/${stateId}/`,
    }),
    getTalukById: builder.query<DistrictList, number>({
      query: (districtId: number) => `api/master/taluk/${districtId}/`,
    }),

    getCityById: builder.query<CityList, number>({
      query: (districtId: number) => `api/master/city/${districtId}/`,
    }),
  }),
});

export const { useGetTagsByIdQuery } = masterDropDownApi;
