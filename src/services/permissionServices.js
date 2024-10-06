import requests from "./httpService";

const PermissionServices = {
  getAllPermissions: () => {
    return requests.get("/permissions");
  },
};

export default PermissionServices;
