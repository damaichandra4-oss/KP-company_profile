import React, { useState } from "react";
import { Plus, Trash2, GripVertical, Save } from "lucide-react";
import { useSiteData } from "../../context/DataContext";
import { setData } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";

const TestimonialsEditor = () => {
  const { testimonials, refresh } = useSiteData();
  const [items, setItems] = useState(testimonials || []);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Remove the fake ids before saving if needed, but keeping them is fine for keys
    const success = await setData(STORAGE_KEYS.testimonials, items);
    
    if (success) {
      setSaveSuccess(true);
      refresh();
      setTimeout(() => setSaveSuccess(false), 2000);
    }
    setIsSaving(false);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name: "Nama Pelanggan",
        role: "Pelanggan Baru",
        message: "Ketik ulasan di sini...",
        rating: 5,
      },
    ]);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Edit Testimonial</h2>
        <p className="text-sm text-gray-505">Kelola ulasan dan komentar pelanggan yang tampil di halaman utama.</p>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-6 shadow-sm relative group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
              <GripVertical size={20} className="text-gray-400" />
            </div>

            <button
              onClick={() => removeItem(index)}
              className="absolute right-4 top-4 text-red-500 p-2 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
              title="Hapus"
            >
              <Trash2 size={18} />
            </button>

            <div className="pl-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(index, "name", e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role / Pekerjaan
                </label>
                <input
                  type="text"
                  value={item.role}
                  onChange={(e) => updateItem(index, "role", e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={item.rating}
                  onChange={(e) => updateItem(index, "rating", parseInt(e.target.value) || 5)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan Ulasan
                </label>
                <textarea
                  value={item.message}
                  onChange={(e) => updateItem(index, "message", e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none min-h-[100px]"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addItem}
          className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-cyan-500 hover:text-cyan-600 transition flex items-center justify-center gap-2 font-medium"
        >
          <Plus size={20} />
          Tambah Testimonial
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700 text-sm disabled:opacity-50"
          >
            <Save size={16} />
            {isSaving ? "Menyimpan..." : "Simpan"}
          </button>
          {saveSuccess && (
            <span className="text-green-600 text-sm">Tersimpan!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsEditor;
