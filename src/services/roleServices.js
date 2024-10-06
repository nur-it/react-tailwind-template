import requests from "./httpService";

const RoleServices = {
  getAllRoles: () => {
    return requests.get("/roles");
  },

  createRole: (body) => {
    return requests.post("/roles", body);
  },

  // update role
  updateRole: (body, id) => {
    return requests.put(`/roles/${id}`, body);
  },

  // delete role
  deleteRole: (id) => {
    return requests.delete(`/roles/${id}`);
  },
};

export default RoleServices;
