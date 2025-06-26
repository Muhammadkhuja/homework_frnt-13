import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Foydalanuvchi Ma'lumotlari</h1>
        {user ? (
          <div className="space-y-3 text-gray-800">
            <p><span className="font-semibold">Ismi:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Shahar:</span> {user.address?.city}</p>
            <p><span className="font-semibold">Telefon:</span> {user.phone}</p>
            <p><span className="font-semibold">Sayt:</span> <a href={`http://${user.website}`} target="_blank" className="text-blue-600 underline">{user.website}</a></p>
            <p><span className="font-semibold">Kompaniya:</span> {user.company?.name}</p>
          </div>
        ) : (
          <p>Yuklanmoqda...</p>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
