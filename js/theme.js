const themeMap = {
    dark: "light",
    light: "dark",
};

// Obtener el tema actual del localStorage
const currentTheme = localStorage.getItem('theme');

// Si no hay un tema almacenado o el tema actual no está en themeMap, se establece el tema "light" como predeterminado.
const theme = currentTheme && themeMap[currentTheme] ? currentTheme : "light";

const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;
