import AxiosBase from "./AxiosBase";

// const token = localStorage.adminToken;
const token = localStorage.getItem("adminToken");
const headerToken = {
  headers: {
    "x-access-token": token,
  },
};

export const adminLogin = (formData) =>
  AxiosBase.post("/auth/admin-login", { ...formData });

export const myProfile = () => AxiosBase.get("/admin/my-profile", headerToken);

export const updateProfile = (data) => {
  console.log(data);
  return AxiosBase.patch("/admin/update-profile", data, headerToken);
};

export const getPatients = () =>
  AxiosBase.get("/admin/patients-list", headerToken);
