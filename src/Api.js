import axios from "axios";

const API_BASE_URL = "http://3.7.81.243:3253/api";

export const getSettings = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/settings/fetch-frontend-details`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching settings:", error);
    throw error;
  }
};

export const getAllBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact/send`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
