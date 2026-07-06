import { createContext, useContext, useState, useEffect } from "react";
import { STORAGE_KEYS } from "../admin/utils/constants";
import {
  DEFAULT_HERO,
  DEFAULT_ABOUT,
  DEFAULT_SERVICES,
  DEFAULT_SOFTWARE,
  DEFAULT_BIDANG_DATA,
  DEFAULT_CORE_SERVICES,
  DEFAULT_FOOTER,
  DEFAULT_TESTIMONIALS,
} from "../data/defaults";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  const fetchAll = async () => {
    try {
      // First try to load from API
      const res = await fetch("/api/data");
      if (!res.ok) throw new Error("API Error");
      const settings = await res.json();
      
      setData({
        hero: settings[STORAGE_KEYS.hero] || DEFAULT_HERO,
        about: settings[STORAGE_KEYS.about] || DEFAULT_ABOUT,
        services: settings[STORAGE_KEYS.services] || DEFAULT_SERVICES,
        software: settings[STORAGE_KEYS.software] || DEFAULT_SOFTWARE,
        bidang: settings[STORAGE_KEYS.bidang] || DEFAULT_BIDANG_DATA,
        coreServices: settings[STORAGE_KEYS.coreServices] || DEFAULT_CORE_SERVICES,
        footer: settings[STORAGE_KEYS.footer] || DEFAULT_FOOTER,
        portfolioPreview: settings[STORAGE_KEYS.portfolioPreview] || [],
        testimonials: settings[STORAGE_KEYS.testimonials] || DEFAULT_TESTIMONIALS,
      });
    } catch (e) {
      console.error("Failed to load from API, falling back to defaults", e);
      // Fallback
      setData({
        hero: DEFAULT_HERO,
        about: DEFAULT_ABOUT,
        services: DEFAULT_SERVICES,
        software: DEFAULT_SOFTWARE,
        bidang: DEFAULT_BIDANG_DATA,
        coreServices: DEFAULT_CORE_SERVICES,
        footer: DEFAULT_FOOTER,
        portfolioPreview: [],
        testimonials: DEFAULT_TESTIMONIALS,
      });
    }
  };

  const refresh = () => fetchAll();

  useEffect(() => {
    fetchAll();
  }, []);

  if (!data) return <div className="flex min-h-screen items-center justify-center">Loading...</div>;

  return (
    <DataContext.Provider value={{ ...data, refresh }}>
      {children}
    </DataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(DataContext);
}
