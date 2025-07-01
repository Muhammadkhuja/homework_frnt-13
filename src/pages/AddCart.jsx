// import React, { useState, useEffect } from "react";

// function AddCart({ isOpen, toggle, onSave, initialData = null }) {
//   const isUpdate = initialData !== null;

//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     sale: "",
//     quantity: "",
//     img: "./src/assets/foto.jpg",
//   });

//   useEffect(() => {
//     if (isUpdate && initialData) {
//       setForm(initialData);
//     } else {
//       setForm({
//         name: "",
//         price: "",
//         sale: "",
//         quantity: "",
//         img: "./src/assets/foto.jpg",
//       });
//     }
//   }, [initialData, isUpdate]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     const finalItem = {
//       ...form,
//       id: isUpdate ? form.id : Date.now(),
//       price: +form.price,
//       sale: +form.sale,
//       quantity: +form.quantity,
//     };
//     onSave(finalItem);
//     toggle();
//     if (!isUpdate) {
//       setForm({
//         name: "",
//         price: "",
//         sale: "",
//         quantity: "",
//         img: "./src/assets/react.svg",
//       });
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//         <h2 className="text-xl font-bold mb-4">
//           {isUpdate ? "Mahsulotni yangilash" : "Yangi mahsulot qo‘shish"}
//         </h2>

//         <div className="space-y-4">
//           <div>
//             <label className="block font-medium text-sm mb-1">Nomi</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-sm mb-1">Narxi</label>
//             <input
//               type="number"
//               name="price"
//               value={form.price}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-sm mb-1">Chegirma (%)</label>
//             <input
//               type="number"
//               name="sale"
//               value={form.sale}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-sm mb-1">Soni</label>
//             <input
//               type="number"
//               name="quantity"
//               value={form.quantity}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-sm mb-1">Rasm URL</label>
//             <input
//               type="text"
//               name="img"
//               value={form.img}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-3 py-2 rounded"
//             />
//           </div>
//         </div>

//         <div className="flex justify-end gap-2 mt-6">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             {isUpdate ? "Saqlash" : "Qo‘shish"}
//           </button>
//           <button
//             onClick={toggle}
//             className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//           >
//             Bekor qilish
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddCart;



import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddCart({ isOpen, toggle, onSave, initialData = null }) {
  const isUpdate = initialData !== null;

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      sale: "",
      quantity: "",
      img: "./src/assets/foto.jpg",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nomi majburiy"),
      price: Yup.number().required("Narxi majburiy").positive("Musbat son bo‘lishi kerak"),
      sale: Yup.number().min(0, "Kamida 0 bo‘lishi kerak").max(100, "Ko‘pi bilan 100"),
      quantity: Yup.number().required("Soni majburiy").min(1, "Kamida 1 bo‘lishi kerak"),
      img: Yup.string().url("URL noto‘g‘ri"),
    }),
    onSubmit: (values, { resetForm }) => {
      const finalItem = {
        ...values,
        id: isUpdate ? initialData.id : Date.now(),
        price: +values.price,
        sale: +values.sale,
        quantity: +values.quantity,
      };
      onSave(finalItem);
      toggle();
      if (!isUpdate) {
        resetForm();
      }
    },
    enableReinitialize: true, // initialData o‘zgarsa, formani yangilash
  });

  useEffect(() => {
    if (isUpdate && initialData) {
      formik.setValues(initialData);
    } else {
      formik.resetForm();
    }
  }, [initialData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-bold mb-4">
          {isUpdate ? "Mahsulotni yangilash" : "Yangi mahsulot qo‘shish"}
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Nomi */}
          <div>
            <label className="block font-medium text-sm mb-1">Nomi</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          {/* Narxi */}
          <div>
            <label className="block font-medium text-sm mb-1">Narxi</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            )}
          </div>

          {/* Chegirma */}
          <div>
            <label className="block font-medium text-sm mb-1">Chegirma (%)</label>
            <input
              type="number"
              name="sale"
              value={formik.values.sale}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {formik.touched.sale && formik.errors.sale && (
              <div className="text-red-500 text-sm">{formik.errors.sale}</div>
            )}
          </div>

          {/* Soni */}
          <div>
            <label className="block font-medium text-sm mb-1">Soni</label>
            <input
              type="number"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <div className="text-red-500 text-sm">{formik.errors.quantity}</div>
            )}
          </div>

          {/* Rasm URL */}
          <div>
            <label className="block font-medium text-sm mb-1">Rasm URL</label>
            <input
              type="text"
              name="img"
              value={formik.values.img}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {formik.touched.img && formik.errors.img && (
              <div className="text-red-500 text-sm">{formik.errors.img}</div>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {isUpdate ? "Saqlash" : "Qo‘shish"}
            </button>
            <button
              type="button"
              onClick={toggle}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Bekor qilish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCart;
