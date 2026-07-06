import { useState } from "react";
import { STORAGE_KEYS } from "../utils/constants";
import { getData, setData } from "../utils/storage";
import { DEFAULT_HERO } from "../../data/defaults";
import { useSiteData } from "../../context/DataContext";
import { Save, Image as ImageIcon, X } from "lucide-react";

export default function HeroEditor() {
  const { refresh } = useSiteData();
  const [form, setForm] = useState(() => getData(STORAGE_KEYS.hero, DEFAULT_HERO));
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setData(STORAGE_KEYS.hero, form);
    refresh();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran gambar terlalu besar (Maksimal 5MB)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        // Compress image using canvas
        const img = new window.Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = field === 'imageMobile' ? 1080 : 1920;
          const MAX_HEIGHT = field === 'imageMobile' ? 1920 : 1080;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          
          // Compress to JPEG with 70% quality
          const compressed = canvas.toDataURL("image/jpeg", 0.7);
          setForm({ ...form, [field]: compressed });
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Hero Section</h2>
      <div className="bg-white rounded-xl shadow-sm border p-6 max-w-2xl space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gambar Latar Belakang (Desktop)
          </label>
          <div className="flex items-start gap-4 mb-4">
            {form.image && (
              <div className="relative w-32 h-20 rounded overflow-hidden border">
                <img src={form.image} alt="Hero Background Desktop" className="w-full h-full object-cover" />
                <button
                  onClick={() => setForm({ ...form, image: "" })}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 flex items-center justify-center"
                >
                  <X size={12} />
                </button>
              </div>
            )}
            <div className="flex-1">
              <label className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50 text-sm">
                <ImageIcon size={16} className="text-gray-500" />
                <span className="text-gray-700">Pilih Gambar Desktop...</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'image')}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-gray-400 mt-1">Gunakan rasio 16:9 (contoh: 1920x1080px) untuk tampilan optimal di Desktop.</p>
            </div>
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1 border-t pt-4">
            Gambar Latar Belakang Khusus HP (Opsional)
          </label>
          <div className="flex items-start gap-4">
            {form.imageMobile && (
              <div className="relative w-20 h-32 rounded overflow-hidden border">
                <img src={form.imageMobile} alt="Hero Background Mobile" className="w-full h-full object-cover" />
                <button
                  onClick={() => setForm({ ...form, imageMobile: "" })}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 flex items-center justify-center"
                >
                  <X size={12} />
                </button>
              </div>
            )}
            <div className="flex-1">
              <label className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50 text-sm">
                <ImageIcon size={16} className="text-gray-500" />
                <span className="text-gray-700">Pilih Gambar HP...</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'imageMobile')}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-gray-400 mt-1">Jika kosong, maka akan menggunakan gambar Desktop. Gunakan ukuran memanjang (portrait) agar tidak terpotong di HP.</p>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mode Tampilan Gambar
          </label>
          <select
            value={form.imageFit || "cover"}
            onChange={(e) => setForm({ ...form, imageFit: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none mb-2"
          >
            <option value="cover">Penuhi Layar (Cover - pinggir gambar bisa terpotong)</option>
            <option value="contain">Tampilkan Seluruh Gambar (Contain - mungkin ada ruang kosong)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Heading
          </label>
          <input
            type="text"
            value={form.heading}
            onChange={(e) => setForm({ ...form, heading: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
          <p className="text-xs text-gray-400 mt-1">
            Gunakan {"<br />"} untuk baris baru, atau cukup ketik multi-baris
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subtitle
          </label>
          <textarea
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            rows={3}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700 text-sm"
          >
            <Save size={16} />
            Simpan
          </button>
          {saved && (
            <span className="text-green-600 text-sm">Tersimpan!</span>
          )}
        </div>
      </div>
    </div>
  );
}
