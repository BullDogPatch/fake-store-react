import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../utils/utils";

function ProductPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <h2 className="text-black">Loading...</h2>;

  return (
    <div className="m-4 text-black">
      <h3 className="text-center text-red-500 uppercase font-bold pb-2">
        {data.category}
      </h3>
      <h1 className="text-xl font-bold text-center pb-6">{data.title}</h1>
      <div>
        <img
          src={data.image}
          alt={`image of ${data.title}`}
          className="w-64 m-auto p-8 rounded-lg border-4 border-indigo-200"
        />
      </div>
      <p className="text-md font-bold p-6">{data.description}</p>
      <div className="text-center">
        <p className="pt-2">£{data.price}</p>
      </div>
    </div>
  );
}

export default ProductPage;
