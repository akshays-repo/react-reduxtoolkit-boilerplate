import instance from './axios';

export interface Options {
  api: string;
  id?: string | number;
  params?: any;
  method:
    | 'get'
    | 'post'
    | 'delete'
    | 'patch'
    | 'put'
    | 'putFormData'
    | 'postFormData';
  data?: any;
}

export const callApi = async (options: Options) => {
  let response;

  try {
    if (options.method === 'get') {
      response = await instance.getData(options);
    } else if (options.method === 'post') {
      response = await instance.postData(options);
    } else if (options.method === 'delete') {
      response = await instance.deleteData(options);
    } else if (options.method === 'patch') {
      response = await instance.PatchData(options);
    } else if (options.method === 'putFormData') {
      response = await instance.putFormData(options);
    } else if (options.method === 'postFormData') {
      response = await instance.postFormData(options);
    } else if (options.method === 'put') {
      response = await instance.putData(options);
    }

    return response?.data;
  } catch (error) {
    console.log('the error is ', error);
    throw error;
  }
};
