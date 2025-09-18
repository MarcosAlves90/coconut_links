import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(() => {
        // Tenta recuperar o tema salvo no localStorage
        return localStorage.getItem("theme") || "light";
    });

    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const triggerGlitch = () => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 400); // duração do efeito
    };

    const handleClick = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        triggerGlitch();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            handleClick();
        }
    };

    return (
        <div
            className={`${styles.container} ${isGlitching ? styles.glitch : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Mudar tema"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <img
                src="https://res.cloudinary.com/dgsywmzb2/image/upload/v1758214614/cd_qjpnxu.png"
                alt="Imagem de um CD"
                title="CD"
                className={`${styles.img} ${theme === 'dark' ? 'saturate-900' : ''}`}
            />
        </div>
    );
};

export default ThemeSwitcher;
