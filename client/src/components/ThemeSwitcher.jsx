import { Switch } from "@nextui-org/react";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../utils/Icons";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    return (
        <Switch
            defaultSelected={theme === 'light' ? true : false}
            size="md"
            color="secondary"
            onChange={handleToggle}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SunIcon className={className} />
                ) : (
                    <MoonIcon className={className} />
                )
            }
        >
        </Switch>
    );
}
