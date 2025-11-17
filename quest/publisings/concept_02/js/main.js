document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    // Function to set the theme
    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark-theme');
            toggleIcon.classList.remove('bi-moon-stars-fill');
            toggleIcon.classList.add('bi-sun-fill');
        } else {
            body.classList.remove('dark-theme');
            toggleIcon.classList.remove('bi-sun-fill');
            toggleIcon.classList.add('bi-moon-stars-fill');
        }
    };

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        setTheme(!isDark);
    });

    // Optional: Check for saved theme preference in localStorage
    // const savedTheme = localStorage.getItem('theme');
    // if (savedTheme === 'dark') {
    //     setTheme(true);
    // } else {
    //     setTheme(false);
    // }
    //
    // // Save theme preference to localStorage
    // themeToggle.addEventListener('click', () => {
    //     const isDark = body.classList.contains('dark-theme');
    //     localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // });
});
