import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../utils/utils";
import Loading from "../components/Loading";

function ProductPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="m-4 text-black">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <span>Go back</span>
      </button>
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
