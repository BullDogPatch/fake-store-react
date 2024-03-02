import axios from "axios";

// https://fakestoreapi.com

const api = axios.create({
  baseURL: `https://fakestoreapi.com`,
});

export const getProducts = async () => {
  const { data } = await api.get(`/products`);
  return data;
};
