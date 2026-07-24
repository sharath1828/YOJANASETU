import api from "./api";

/* ========= User Dashboard ========= */

export const getUserDashboard = async () => {

  try {

    const response = await api.get("/dashboard/user");

    return response.data;

  } catch (error) {

    throw error.response?.data || error;

  }

};

/* ========= Admin Dashboard ========= */

export const getAdminDashboard = async () => {

  try {

    const response = await api.get("/dashboard/admin");

    return response.data;

  } catch (error) {

    throw error.response?.data || error;

  }

};