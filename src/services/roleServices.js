import requests from "./httpService";

const RoleServices = {
  getAllRoles: () => {
    return requests.get("/roles");
  },

  createRole: (body) => {
    // return requests.post("/roles", body);
    console.log(body);
  },
};

export default RoleServices;
