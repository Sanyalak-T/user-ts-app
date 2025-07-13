import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout, setUser } = useAuth();
  const handleLogout = async () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="text-2xl text-center font-bold mb-4 text-black uppercase">
        Dashboard
      </div>
      <hr />
      <div className="p-4">
        <h1 className="text-2xl">
          Welcome {user?.email}
        </h1>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;
