import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';

function EditProduct() {
    // set use state
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(1);
    const [description, setDescripion] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { productId } = useParams();
    // const navigate = useNavigate();

    //edit a product
    const endpoint = "https://67f9f0e3094de2fe6ea2b617.mockapi.io/products";

    useEffect(() => {
        const updateProduct = async () => {
            // if (!productName || !rating || !developer) return;

            try {
                const res = await fetch(`${endpoint}/${productId}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await res.json();
                    setTitle(data.title);
                    setDescripion(data.description);
                    setRating(data.rating);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        updateProduct();
    }, [productId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`${endpoint}/${productId}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: title,
                    description: description,
                    rating: rating,
                }),
            })
            const response = await res.json();
            console.log(response);
            location.href = "/products";
            // navigate('/products');
        } catch(error) {
            setError('Create error' + error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div className="italic">Loading data...</div>;
      }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center">
            <h2 className="text-red-600">Something went wrong!</h2>
            <p className="text-red-600">Please contact support@support.com</p>
            </div>
        );
    }

  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <p className='font-semibold pb-4'>Edit product...</p>
                <hr />
                <br />
                <label>Enter product name:
                <input
                    type="text"
                    name="productname"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border-2 border-blue-200'
                />
                </label>
                <br />
                <br />
                <label>Enter description:
                    <input
                    type="text"
                    name="developer"
                    value={description}
                    onChange={(e) => setDescripion(e.target.value)}
                    className='border-2 border-blue-200'
                    />
                </label>
                <br />
                <br />
                <label>Enter rating:
                    <input
                    type="number"
                    min="1"
                    max="5"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className='border-2 border-blue-200'
                    />
                </label>
                <br />
                <br />
                <hr />
                <br />
                <input type="submit" className='my-8 font-semibold text-amber-200 bg-amber-900 px-8 py-2 mr-4 rounded-lg shadow-md shadow-amber-700/50 cursor-pointer'/>
                <Link
                    to="/products"
                    className="my-8 font-semibold text-amber-200 bg-amber-900 px-8 py-2 rounded-lg shadow-md shadow-amber-700/50"
                >
                    Back to Products
                </Link>
            </form>
        </div>
    </>
  )
}

export default EditProduct