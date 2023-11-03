import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Dropdown } from 'flowbite-react'
import { useLocale } from '../hooks/useLocale'
import { useTranslation } from 'react-i18next'

const LOCALES = {
    es: {
        name: 'Español',
        zone: 'España'
    },
    en: {
        name: 'English',
        zone: 'United States'
    }
}

const I18nWidget = () => {
    const { asPath: currentPath } = useRouter()
    const { locale, locales } = useLocale()
    const languagesRef = useRef(null)
    const options = locales?.filter(val => val !== locale);
    const { name, zone } = LOCALES[locale];
    const { t } = useTranslation('common');

    return (
        <>
            <Dropdown className='dark:text-white dark:bg-gray-700' trigger='click' dismissOnClick={false} renderTrigger={() =>
                <button
                    aria-label='Selector de idioma'
                    type='button'
                    data-dropdown-toggle="dropdownSkidding"
                    data-dropdown-offset-distance="10"
                    className="mx-2 inline-flex items-center font-medium dark:text-white justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <Image height={16} width={16} src={`/flag-${locale}.svg`} />
                    <span className="mx-1">{name}</span>
                </button>
            }>
                {options?.length
                    ? (
                        <ul ref={languagesRef}>
                            {options.map(locale =>
                                <Dropdown.Item key={locale}>
                                    <Link href={currentPath} passHref legacyBehavior locale={locale}>
                                        <a>
                                            <Image height={16} width={16} src={`/flag-${locale}.svg`} />
                                            <span className="mx-1">
                                                {LOCALES[locale].name}
                                            </span>
                                        </a>
                                    </Link>
                                </Dropdown.Item>)}
                        </ul>
                    )
                    : null}

            </Dropdown>
        </>
    )
}

export default I18nWidget;