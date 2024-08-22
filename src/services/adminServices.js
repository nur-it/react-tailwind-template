import requests from "./httpService";

const AdminServices = {
  // admin login
  adminLogin: (body) => {
    return requests.post("/auth/register", body);
  },
  // admin register
  adminRegister: () => {
    return requests.post("/auth/login");
  },
  // admin change password
  adminChangePassword: () => {
    return requests.post("/auth/change-password");
  },
  // admin update
  adminUpdate: () => {
    return requests.put("/users");
  },
  // admin delete
  adminDelete: () => {
    return requests.delete("/users");
  },
  // get all admin
  getAllAdmin: () => {
    return requests.get("/users");
  },
  // get single admin
  getSingleAdmin: () => {
    return requests.get("/users");
  },
};

export default AdminServices;
