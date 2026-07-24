import api from "./api";

export const getAdminDashboard = async () => {
  try {
    const response = await api.get("/dashboard/admin");
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};