import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`)
      .then((res) => {
        setUser(res.data);
        setHasNext(res.data.length === limit);
      });
  }, [page, limit]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleLimitChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 50) {
      setLimit(value);
      setPage(1); // yangi limitda boshidan
    }
  };

  const moveSingleUser = (id) => {
    console.log("User ID:", id); // kerak bo‘lsa navigatsiya yoki boshqa funksiya
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Foydalanuvchilar ro'yxati</h1>

      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Address (City)</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Website</th>
              <th className="p-2 border">Company</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr
                key={item.id}
                onClick={() => moveSingleUser(item.id)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.username}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.address.city}</td>
                <td className="p-2 border">{item.phone}</td>
                <td className="p-2 border">{item.website}</td>
                <td className="p-2 border">{item.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className={`px-4 py-2 rounded bg-gray-500 text-white ${
              page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
            }`}
          >
            Prev
          </button>

          <span className="text-lg font-medium">{page}</span>

          <button
            onClick={nextPage}
            disabled={!hasNext}
            className={`px-4 py-2 rounded bg-gray-500 text-white ${
              !hasNext ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
            }`}
          >
            Next
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="limit" className="text-gray-700 font-medium">
            Limit:
          </label>
          <input
            id="limit"
            type="number"
            value={limit}
            onChange={handleLimitChange}
            className="w-20 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            min={1}
            max={50}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
