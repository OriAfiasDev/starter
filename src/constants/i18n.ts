export type Locale = {
	dir: 'rtl' | 'ltr';
	drawer: 'left' | 'right' | 'top' | 'bottom' | undefined;
	title: string;
	lorem: string;
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
		lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, iusto? Officia repudiandae dolor totam neque iusto doloribus suscipit ipsum explicabo, necessitatibus voluptatibus qui ea perferendis obcaecati incidunt minus cupiditate quia.'
	},
	he: {
		dir: 'rtl',
		drawer: 'right',
		title: 'סטארטר',
		lorem: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.'
	},
};
