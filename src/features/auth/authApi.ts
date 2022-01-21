import { API } from "../../app/apiEndpoints";
import { callApi } from "../../services/callApi";

export const authApi = async (body: { username: string | undefined; password: string | undefined  , application_id : string | number}) => {
  const response = await callApi({
    api: API.LOGIN,
    data: body,
    method: "post",
  });
  return response;
};
