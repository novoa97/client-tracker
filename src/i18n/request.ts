import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const cookieStore = await cookies();

    const locale = cookieStore.get('LOCALE')?.value || 'es'; // 'es' como idioma por defecto

    console.log('Locale:', locale)

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});