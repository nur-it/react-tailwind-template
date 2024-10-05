import requests from "./httpService";

const RoleServices = {
  getAllRoles: () => {
    return requests.get("/roles");
  },
};

export default RoleServices;
