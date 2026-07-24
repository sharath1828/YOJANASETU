import api from "./api";

/* ========= Get Recommendations ========= */

export const getRecommendations = async () => {

  try {

    const response = await api.get("/recommendations");

    return response.data;

  } catch (error) {

    throw error.response?.data || error;

  }

};