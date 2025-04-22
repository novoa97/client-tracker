'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function useChangeLocale() {
    const router = useRouter();
    const currentLocale = useLocale();

    const setLocale = (newLocale: string) => {
        if (newLocale === currentLocale) return;

        // Actualiza la cookie con el nuevo idioma
        document.cookie = `LOCALE=${newLocale}; path=/`;

        // Fuerza refresco para que el layout y los mensajes se recarguen con el nuevo idioma
        router.refresh();
    };

    return { locale: currentLocale, setLocale };
}
