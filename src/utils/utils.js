import axios from "axios";

// https://fakestoreapi.com

const api = axios.create({
  baseURL: `https://fakestoreapi.com`,
});

export const getProducts = async () => {
  const { data } = await api.get(`/products`);
  return data;
};

export const getProductById = async (product_id) => {
  const { data } = await api.get(`/products/${product_id}`);
  return data;
};
