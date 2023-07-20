export const LOCAL_STORAGE_KEYS = {
  isLogged: "isUserLoggedIn",
};

export const getIsUserLogged = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.isLogged));
};
