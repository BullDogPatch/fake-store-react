import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../utils/utils";
import Product from "../routes/Product";

const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(data);
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-5">
      {data?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
