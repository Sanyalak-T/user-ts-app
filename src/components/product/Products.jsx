import { Link } from "react-router";

function Products({products, onDelete}) {

  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-4 text-black uppercase">Products</h1>

      <Link to={"/newproduct"} className='p-4 font-semibold text-black rounded-2xl bg-blue-300 hover:bg-blue-500'>New product</Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {products.map((product) => (
          <div
            key={product.product_id}
            className="p-4 rounded-md hover:shadow-lg transition bg-blue-300"
          >
            <h2 className="text-xl mb-2 font-semibold">Name: {product.title}</h2>
            <p className="text-gray-600 mb-4">Description: {product.description}</p>
            <p className="text-gray-600 mb-4">Rating: {product.rating}</p>
            <Link to={`/products/${product.product_id}`}
              className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-900 transition"
            >
              View Details
            </Link>
            <Link to={`/edit/${product.product_id}`} className='ml-4 px-4 py-2 bg-red-300 hover:bg-red-400 text-white rounded-md cursor-pointer' >
              Edit
            </Link>
            <button className='ml-4 px-4 py-2 bg-red-400 hover:bg-red-500 text-white rounded-md cursor-pointer' onClick={() => onDelete(product.product_id)} >Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products