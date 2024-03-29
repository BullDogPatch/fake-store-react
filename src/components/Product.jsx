const Product = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex flex-col justify-center w-[80%] m-auto text-center list-none p-3"
    >
      <h2 className="text-xl font-bold py-4 text-black truncate">
        {product.title}
      </h2>
      <div className="w-[100%] ">
        <img
          src={product.image}
          alt=""
          className="rounded-lg w-[22rem] h-[13rem] lg:w-[500px] lg:h-[300px] lg:m-auto"
        />
      </div>

      <p className="font-bold text-black">£{product.price}</p>
    </div>
    //   <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <img
    //         className="p-8 rounded-t-lg"
    //         src={product.image}
    //         alt="product image"
    //       />
    //     </a>
    //     <div className="px-5 pb-5">
    //       <a href="#">
    //         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    //           {product.title}
    //         </h5>
    //       </a>

    //       <div className="flex items-center justify-between">
    //         <span className="text-3xl font-bold text-gray-900 dark:text-white">
    //           £{product.price}
    //         </span>
    //         <a
    //           href="#"
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         >
    //           Add to cart
    //         </a>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Product;
