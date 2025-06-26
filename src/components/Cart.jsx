import React from "react";

function Cart({ item, onDelete, onUpdate }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-center text-lg font-semibold mb-2">{item.name}</h3>
        <div className="flex justify-between items-center text-sm text-gray-700">
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <div className="flex gap-2">
            <button
              onClick={() => onUpdate(item)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
            >
              Yangilash
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
            >
              O‘chirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
