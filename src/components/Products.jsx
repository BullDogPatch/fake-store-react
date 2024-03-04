import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../utils/utils";

const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(data);
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <ul className="list-none">
        {data?.map((product) => (
          <li
            key={product.id}
            className="flex flex-col justify-center w-[80%] m-auto text-center list-none"
          >
            <h2 className="text-2xl p-2 text-red-500">{product.title}</h2>
            <div className="rounded-5">
              <img
                src={product.image}
                alt=""
                className="w-[500px] h-[500px] rounded-5"
              />
            </div>
            <p>{product.description}</p>
            <p className="font-bold">£{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
