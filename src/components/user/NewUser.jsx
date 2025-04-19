import React from 'react'
import { useState } from 'react'

function NewProduct() {
    const products_URL = "https://67f9f0e3094de2fe6ea2b617.mockapi.io/products";

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(1);
    const [description, setDescripion] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const newProduct = {
        title: title,
        description: description,
        rating: rating,
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

    // used form in post method
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(products_URL, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newProduct),
            })
            console.log(res);
            location.reload();
        } catch(err) {
            setError('Create error' + err + error);
        } finally {
            setLoading(false);
        }
    }

  return (
    <>
        <div>
        <form onSubmit={handleSubmit}>
                    <p className='font-semibold pb-4'>New User...</p>
                    <hr />
                    <br />
                    <label>Enter name:
                    <input
                        type="text"
                        name="productname"
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
                        onChange={(e) => setRating(e.target.value)}
                         className='border-2 border-blue-200'
                        />
                    </label>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <input type="submit" className='text-white p-4 bg-blue-300 cursor-pointer'/>
                </form>
        </div>
    </>
  )
}

export default NewProduct