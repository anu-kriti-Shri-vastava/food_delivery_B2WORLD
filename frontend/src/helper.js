import axios from "axios";

export const getCart = async (user) => {
  const res = await axios.get(`https://food-delivery-b2-world.vercel.app/api/get-cart/${user._id}`);
  const data = await res.data;
  return data;
};
