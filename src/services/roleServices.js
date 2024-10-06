import requests from "./httpService";

const RoleServices = {
  getAllRoles: () => {
    return requests.get("/roles");
  },

  createRole: (body) => {
    return requests.post("/roles", body);
  },
};

export default RoleServices;
