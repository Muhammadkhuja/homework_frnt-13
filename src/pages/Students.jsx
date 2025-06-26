import React, { useEffect, useState } from "react";
import {User} from "../service/student"

function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    jshshr: "",
    dob: "",
    address: "",
  });
  const [editId, setEditingId] = useState(null);

  const fetchStudents = async () => {
    const response = await User.getAll();
    setStudents(response);
  };

  const clearForm = () => {
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      jshshr: "",
      dob: "",
      address: "",
    });
    setEditingId(null);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const res = await User.updateUser(editId, form);
        if (res?.status === 200) {
          await fetchStudents();
          clearForm();
        }
      } else {
        const res = await User.createUser(form);
        if (res?.status === 201) {
          await fetchStudents();
          clearForm();
        }
      }
    } catch (err) {
      console.error("Xatolik:", err);
    }
  };

  const deleteItem = async (id) => {
    const res = await User.deleteUser(id);
    if (res?.status === 200) {
      await fetchStudents();
    }
  };

  const editItem = (item) => {
    setForm({ ...item });
    setEditingId(item.id);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-6">
        {/* FORM */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            {editId ? "Edit Student" : "Add Student"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            {["first_name", "last_name", "email", "jshshr", "dob", "address"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field.replace("_", " ")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {editId ? "Update" : "Save"}
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="md:col-span-2 overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 border">First name</th>
                <th className="p-2 border">Last name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">JSHSHR</th>
                <th className="p-2 border">DOB</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{item.first_name}</td>
                  <td className="p-2 border">{item.last_name}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.jshshr}</td>
                  <td className="p-2 border">{item.dob}</td>
                  <td className="p-2 border">{item.address}</td>
                  <td className="p-2 border flex justify-center gap-2">
                    <button
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 text-sm"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {!students.length && (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-gray-500">
                    Ma'lumotlar mavjud emas
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
