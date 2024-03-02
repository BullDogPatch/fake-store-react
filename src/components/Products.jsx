import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../utils/utils";

const Products = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(data);

  return <div>Products</div>;
};

export default Products;
