import { LOCAL_STORE } from "../constants/localStorageKeys";

export const isUserLogined = (): boolean => {
  let token = localStorage.getItem(LOCAL_STORE.TOKEN);
  if (token) {
    return true;
  } else {
    return false;
  }
};


export const logoutUser = () =>{


  localStorage.clear();
  window.location.href = "/login"
}