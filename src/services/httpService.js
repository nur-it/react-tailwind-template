import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Retrieve accessToken from cookies
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      // Add the Authorization header with the Bearer token
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    // Handle the request error
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle 401 errors without refresh token
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // If the response status is 401 (Unauthorized), remove the accessToken
    if (error.response && error.response.status === 401) {
      // Remove tokens from cookies
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      // Optionally, you could redirect the user to the login page or show a message
      alert("Session expired. Please log in again.");
      // You can use window.location to redirect, or a navigate function from React Router
      window.location.href = "/login"; // Assuming you have a login route
    }

    return Promise.reject(error);
  },
);

const responseBody = (response) => response.data;

const requests = {
  get: (url, headers) => instance.get(url, { headers }).then(responseBody),
  post: (url, body, headers) =>
    instance.post(url, body, { headers }).then(responseBody),
  put: (url, body, headers) =>
    instance.put(url, body, { headers }).then(responseBody),
  patch: (url, body, headers) =>
    instance.patch(url, body, { headers }).then(responseBody),
  delete: (url, headers) =>
    instance.delete(url, { headers }).then(responseBody),
};

export default requests;
