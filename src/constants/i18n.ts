export type Locale = {
	dir: 'rtl' | 'ltr';
	drawer: 'left' | 'right' | 'top' | 'bottom' | undefined;
	title: string;
};

export interface I18N {
	en: Locale;
	he: Locale;
}

export const i18n: I18N = {
	en: {
		dir: 'ltr',
		drawer: 'left',
		title: 'StarterApp',
	},
	he: {
		dir: 'rtl',
		drawer: 'right',
		title: 'סטארטר',
	},
};
