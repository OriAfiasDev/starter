import { createContext, useContext, useState } from 'react';
import { i18n, Locale } from '../constants/i18n';
import { Language } from '../models/types';

interface Props {
	language: Language;
	setLanguage: (language: Language) => void;
	locale: Locale;
}

const LanguageContext = createContext<Props>(null!);

export const LanguageProvider: React.FC = ({ children }) => {
	const [language, setLanguage] = useState<Language>('en');

	return <LanguageContext.Provider value={{ language, setLanguage, locale: i18n[language] }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
