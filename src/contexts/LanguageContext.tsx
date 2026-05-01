import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import translations, { type Lang } from '../i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  t: typeof translations[Lang];
  toggleLang: () => void;
  langSwitch: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('mc-lang');
    return (stored === 'en' || stored === 'ro') ? stored : 'ro';
  });

  useEffect(() => {
    localStorage.setItem('mc-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(l => l === 'ro' ? 'en' : 'ro');

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang, langSwitch: translations[lang].langSwitch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
};
