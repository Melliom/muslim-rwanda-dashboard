const getToken = (): string => localStorage.getItem('rma-token') || '';

export const isAuthenticated = () => !!getToken();

export default getToken;
