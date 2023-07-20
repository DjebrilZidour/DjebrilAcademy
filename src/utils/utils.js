export const LOCAL_STORAGE_KEYS = {
  isLogged: "isUserLoggedIn",
};

export const getIsUserLogged = () => {
  const isUserLogged =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.isLogged));
  if (typeof isUserLogged === "boolean") {
    return isUserLogged
  } else {
    return false
  }
};
