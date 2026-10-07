import './globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
export const metadata = {title: 'Aung Myo Myat | Web Developer', description: 'Full-stack web developer working with React, Next.js, Java and cloud technologies.'};
export default async function RootLayout({children, params}) {
 const {locale} = await params;
 if (!['en', 'jp'].includes(locale)) notFound();
 const messages = (await import(`../../../messages/${locale}.json`)).default;
 return <html lang={locale === 'jp' ? 'ja' : 'en'}><body><NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider></body></html>;
}
