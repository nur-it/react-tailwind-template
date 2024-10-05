import requests from "./httpService";

const RoleServices = {
  async getAllRoles(body) {
    if (!body) {
      throw new Error("Body cannot be null");
    }
    return await requests.post("/roles", body);
  },
};

export default RoleServices;
