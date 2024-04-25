const AUTH_API = `${BASE_API_URL}/auth`; // http://localhost:3000/api/auth
const USER_API = `${BASE_API_URL}/users`; // http://localhost:3000/api/user

const register = (formData) =>  _postnotoken(`${AUTH_API}/register`, formData);

const login = (formData) => _postnotoken(`${AUTH_API}/login`, formData);

const update = (formData) => _post(`${USER_API}/currentuser`, formData);

const logout = () => {
  clearStorage("isAuth");
  clearStorage("access_token");
  clearStorage("refresh_token");
};
