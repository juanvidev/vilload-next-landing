import { DarkThemeToggle, useTheme } from "flowbite-react"
import useStickyState from "../hooks/useStickyState"
import { useEffect, useRef } from "react"

const SCHEMES = {
    SYSTEM: 'system',
    DARK: 'dark',
    LIGHT: 'light'
}


const SchemeColorSwitcher = () => {
    const [scheme, setScheme] = useStickyState(SCHEMES.SYSTEM, 'theme-scheme')
    const { mode, toggleMode } = useTheme();
    const prefers = matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(() => {
        const html = document.querySelector('html')
        if (scheme === SCHEMES.SYSTEM) {
            html.removeAttribute('scheme')
        } else {
            html.setAttribute('scheme', scheme)
        }
        toggleMode(scheme);
    }, [scheme])

    const onChangeTheme = () => {
        setScheme(mode === 'dark' ? SCHEMES.LIGHT : SCHEMES.DARK);
        toggleMode();
    }

    return (
        <button onClick={onChangeTheme} className="hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white text-gray-900 rounded-lg px-3 py-2">
            {mode === 'dark' ? '🌚' : '🌞'}
        </button>
    )
}

export default SchemeColorSwitcher;