import React, { useState, useEffect } from "react";

function AddCart({ isOpen, toggle, onSave, initialData = null }) {
  const isUpdate = initialData !== null;

  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
    img: "./src/assets/foto.jpg",
  });

  useEffect(() => {
    if (isUpdate && initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: "",
        price: "",
        sale: "",
        quantity: "",
        img: "./src/assets/foto.jpg",
      });
    }
  }, [initialData, isUpdate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const finalItem = {
      ...form,
      id: isUpdate ? form.id : Date.now(),
      price: +form.price,
      sale: +form.sale,
      quantity: +form.quantity,
    };
    onSave(finalItem);
    toggle();
    if (!isUpdate) {
      setForm({
        name: "",
        price: "",
        sale: "",
        quantity: "",
        img: "./src/assets/react.svg",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-bold mb-4">
          {isUpdate ? "Mahsulotni yangilash" : "Yangi mahsulot qo‘shish"}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-sm mb-1">Nomi</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Narxi</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Chegirma (%)</label>
            <input
              type="number"
              name="sale"
              value={form.sale}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Soni</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Rasm URL</label>
            <input
              type="text"
              name="img"
              value={form.img}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isUpdate ? "Saqlash" : "Qo‘shish"}
          </button>
          <button
            onClick={toggle}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Bekor qilish
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCart;
