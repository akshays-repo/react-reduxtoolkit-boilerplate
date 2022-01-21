import axios from "axios";
import { LOCAL_STORE } from "../constants/localStorageKeys";
import { Options } from "./callApi";

const token = localStorage.getItem(LOCAL_STORE.TOKEN);

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY,
  headers: {
    "content-type": "application/octet-stream",
    Authorization: token ? `Token ${token}` : "",
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {






  getData: ({
    api,
    params,
    id,
  }: Options) =>
    instance({
      method: "GET",
      url: id ? `${api}/${id}` : api,
      params,
      transformResponse: [
        (res) => {
          // Do whatever you want to transform the data
          const json = JSON.parse(res);
          return json;
        },
      ],
    }),










  postData: ({
    api,
    data,
    id,
  }: Options) =>
    instance({
      method: "POST",
      url: id ? `${api}/${id}/` : api,
      data,
      headers: { "content-type": "application/json" },
      transformResponse: [
        (res) => {
          // Do whatever you want to transform the data
          const json = JSON.parse(res);
          return json;
        },
      ],
    }),

  putData: ({
    api,
    data,
    id,
  }: Options) =>
    instance({
      method: "PUT",
      url: id ? `${api}/${id}/` : api,
      data,
      headers: {
        "content-type": "application/json", // override instance defaults
      },
      transformResponse: [
        (res) => {
          // Do whatever you want to transform the data
          const json = JSON.parse(res);
          return json;
        },
      ],
    }),

  PatchData: ({
    api,
    data,
    id,
  }: Options) =>
    instance({
      method: "PATCH",
      url: id ? `${api}/${id}/` : api,
      data,
      headers: {
        "content-type": "application/json", // override instance defaults
      },
      transformResponse: [
        (res) => {
          // Do whatever you want to transform the data
          const json = JSON.parse(res);
          return json;
        },
      ],
    }),

  deleteData: ({
    api,
    id,
    data,
  }: Options) =>
    instance({
      method: "DELETE",
      url: `${api}/${id}/`,
      data,
      headers: {
        "content-type": "application/json", // override instance defaults
      },
      transformResponse: [
        (res) => {
          // Do whatever you want to transform the data
          const json = JSON.parse(res);
          return json;
        },
      ],
    }),



    postFormData: ({
      api,
      data,
      id,
    }: Options) =>
      instance({
        method: 'POST',
        url: id ? `${api}/${id}/` : api,
        data,
        headers: { 'content-type': 'multipart/form-data' },
        transformResponse: [
          (res) => {
            // Do whatever you want to transform the data
            const json = JSON.parse(res);
            return json;
          },
        ],
      }),
  
    putFormData: ({
      api,
      data,
      id,
    }: Options) =>
      instance({
        method: 'PUT',
        url: id ? `${api}/${id}/` : api,
        data,
        headers: { 'content-type': 'multipart/form-data' },
        transformResponse: [
          (res) => {
            // Do whatever you want to transform the data
            const json = JSON.parse(res);
            return json;
          },
        ],
      }),

      



};
