const getToken = (): string  => {
  return localStorage.getItem("rma-token") || "";
};

export const isAuthenticated = !!getToken();

export default getToken;
