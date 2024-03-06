import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../utils/utils";
import Product from "./Product";

const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(data);
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-2 gap-2 pt-10 md:grid-cols-3 lg:grid-cols-5">
      {data?.map((product) => (
        <Link to={`products/${product.id}`} key={product.id}>
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
