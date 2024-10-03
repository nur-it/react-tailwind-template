import requests from "./httpService";

const AdminServices = {
  // admin login
  adminLoginEmail: (body) => {
    return requests.post("/auth/login/email", body);
  },
  // admin register
  adminRegister: (body) => {
    return requests.post("/auth/register", body);
  },
  // admin change password
  adminChangePassword: (body) => {
    return requests.post("/auth/change-password", body);
  },
  // admin update
  adminUpdate: (body) => {
    return requests.put("/users", body);
  },
  // admin delete
  adminDelete: (id) => {
    return requests.delete("/users", id);
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
