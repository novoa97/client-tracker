import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    const cookieStore = await cookies();

    console.log('CookieStore:', cookieStore)

    // Lee el idioma desde la cookie, por ejemplo: NEXT_LOCALE=es
    const locale = cookieStore.get('LOCALE')?.value || 'es'; // 'es' como idioma por defecto

    console.log('Locale:', locale)

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});