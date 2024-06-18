import axios from 'axios';
import { getCurrentUser } from './authService';

const API_URL = 'http://localhost:5000/api/posts';

const authHeader = () => {
  const user = getCurrentUser();
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
};

export const getPosts = () => {
  return axios.get(API_URL);
};

export const createPost = (post) => {
  return axios.post(API_URL, post, { headers: authHeader() });
};

export const updatePost = (id, post) => {
  return axios.put(`${API_URL}/${id}`, post, { headers: authHeader() });
};

export const deletePost = (id) => {
  return axios.delete(`${API_URL}/${id}`, { headers: authHeader() });
};
