import React, { useState } from "react";
import Cart from "../components/Cart";
import AddCart from "./AddCart";

const Products = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
    {
      id: 2,
      name: "product-2",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
    {
      id: 3,
      name: "product-3",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
    {
      id: 4,
      name: "product-4",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
    {
      id: 5,
      name: "narsa",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
  ]);

  const openAddModal = () => {
    setEditItem(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setEditItem(null);
    setModalOpen(false);
  };

  const handleSave = (item) => {
    if (editItem) {
      setProduct(product.map((p) => (p.id === item.id ? item : p)));
    } else {
      setProduct([...product, item]);
    }
  };

  const deleteProduct = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Control Panel */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <button
          onClick={openAddModal}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full md:w-auto"
        >
          Yangi mahsulot qo‘shish
        </button>

        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).length > 0 ? (
          product
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <Cart
                key={item.id}
                item={item}
                onDelete={deleteProduct}
                onUpdate={openEditModal}
              />
            ))
        ) : (
          <div className="col-span-full text-center text-xl text-gray-600 font-semibold">
            Mahsulot topilmadi
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <AddCart
          isOpen={modalOpen}
          toggle={closeModal}
          onSave={handleSave}
          initialData={editItem}
        />
      )}
    </div>
  );
};

export default Products;
