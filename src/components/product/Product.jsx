import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

function Product({ products }) {
	const { productId } = useParams();
	const [ productDetails, setProductDetails] = useState(null);

	useEffect(() => {
		const product = products.find((product) => product.product_id === productId);

		setProductDetails(product);
	}, [productId, products]);

	if (!productDetails) {
		return (
			<div className="bg-red-300 text-red-900 text-2xl font-semibold flex flex-col justify-center items-center h-full w-full">
				<h2 className="m-4 text-4xl">Sorry, This user is not in our system.</h2>
				<Link
					to="/"
					className="underline underline-offset-8 hover:text-violet-600"
				>
					Back to Home
				</Link>
			</div>
		);
	}

	return (
		<div className="outline outline-amber-500 flex flex-col justify-center items-center w-1/3 rounded-xl shadow-md shadow-amber-700/50 px-8 py-4 font-poppins">
		    <div
                key={productDetails.product_id}
                className="p-4 rounded-md hover:shadow-lg transition bg-blue-300"
            >
                <h2 className="text-xl font-semibold mb-2">Name: {productDetails.title}</h2>
                <p className="text-gray-600 mb-4">Description: {productDetails.description}</p>
                <p className="text-gray-600 mb-4">Product Rating: {productDetails.rating}</p>
          </div>
			<Link
				to="/products"
				className="my-8 font-semibold text-amber-200 bg-amber-900 px-8 py-2 rounded-lg shadow-md shadow-amber-700/50"
			>
				Back to Products
			</Link>
		</div>
	);
}

export default Product;