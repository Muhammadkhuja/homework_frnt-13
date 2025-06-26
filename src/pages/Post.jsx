import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
      .then((res) => {
        setPost(res.data);
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
      setPage(1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Postlar ro'yxati</h1>

      <div className="overflow-x-auto rounded shadow mb-4">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination & Limit */}
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
          <span className="font-semibold text-lg">{page}</span>
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

export default Post;
