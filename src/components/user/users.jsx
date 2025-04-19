// import React, { useEffect } from 'react'
import { Link } from "react-dom";

function Users() {
    // endpoint from mock up API.
    // const users_URL = "https://67f9f0e3094de2fe6ea2b617.mockapi.io/users";

    // const [users, setUsers] = useState([]);

    // get users from mock API
    // const getUsers = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await fetch(users_URL);
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch data");
    //     }
    //     const data = await response.json();
    //     console.log(data);
    //     setUsers(data);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // useEffect(() => {
    //   getUsers
    // })

  return (
    <>
        <h1 className="text-2xl text-center font-bold mb-4 text-black uppercase">Users</h1>

        {/* <Link to={"/newproduct"} className='p-4 font-semibold text-black rounded-2xl bg-blue-300 hover:bg-blue-500'>New product</Link> */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {users.map((user) => (
            <div
              key={user.user_id}
              className="p-4 rounded-md hover:shadow-lg transition bg-blue-300"
            >
              <p className="text-gray-600 mb-4">User: {user.email}</p>
              <p className="text-gray-600 mb-4">Pasword: {user.password}</p>
              <Link to={``}
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
        </div> */}
      </>
  )
}

export default Users