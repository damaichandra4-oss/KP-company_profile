export function getData(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return defaultValue;
    return JSON.parse(raw);
  } catch {
    return defaultValue;
  }
}

export function setData(key, value) {
  try {
    // 1. Simpan di local storage agar UI update instan
    localStorage.setItem(key, JSON.stringify(value));
    
    // 2. Simpan di server (database json) agar pengunjung lain bisa lihat
    fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value })
    }).catch(e => console.error("Gagal simpan ke server:", e));

    return true;
  } catch (e) {
    if (e.name === "QuotaExceededError") {
      alert("Penyimpanan penuh! Hapus beberapa gambar atau reset data.");
    }
    return false;
  }
}

export function removeData(key) {
  localStorage.removeItem(key);
}

export function clearAllData(prefix) {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(prefix)) keys.push(k);
  }
  keys.forEach((k) => localStorage.removeItem(k));
}
