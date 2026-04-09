const translations = {
    'en': {
        'nav_home': 'Home',
        'nav_play': 'Play Game',
        'nav_manual': 'Game Manual',
        'nav_releases': 'Release Notes',
        'nav_rules': 'Rules',
        'nav_tutorial': 'How to Play',
        'nav_gallery': 'Gallery',
        'hero_tagline': 'Next-Generation Naval Combat Engine',
        'hero_desc': 'Experience studio-grade tactical warfare directly in your browser. Command nuclear submarines, deploy stealth maneuvers, and outsmart an adaptive AI—all with zero downloads and ultra-fast WebGL rendering.',
        'btn_start': 'Start Simulation',
        'btn_manual': 'Read Manual',
        'feat_title': 'Game <span>Features</span>',
        'feat_1_title': 'Mobile Optimized UX',
        'feat_1_desc': 'Play seamlessly on any device. Features dimension-aware UI scaling, smart HUD folding, and intuitive touch gestures like swipe-to-scroll and double-tap deployment.',
        'feat_2_title': 'Adaptive AI Engine',
        'feat_2_desc': 'Face off against an autonomous command AI that evaluates board states dynamically. Supports seamless transition between manual and auto-placement strategies.',
        'feat_3_title': 'Neon Aesthetics',
        'feat_3_desc': 'Immerse yourself in a high-fidelity tactical environment featuring responsive 3D cards, particle impact effects, and a cohesive cyberpunk naval design language.',
        'footer_rights': '© 2026 Megumi Joy Studio. All rights reserved.',
        'footer_other': 'Other Games',
        'footer_privacy': 'Privacy',
        'footer_sitemap': 'Site Map',
        'footer_contact': 'Contact',
        'releases_title': 'Release <span class="accent">History</span>',
        'releases_desc': 'Changelog, updates, and tactical improvements to the Sea Hunter framework.'
    },
    'es': {
        'nav_home': 'Inicio',
        'nav_play': 'Jugar',
        'nav_manual': 'Manual del Juego',
        'nav_releases': 'Notas de la Versión',
        'nav_rules': 'Reglas',
        'nav_tutorial': 'Cómo Jugar',
        'nav_gallery': 'Galería',
        'hero_tagline': 'Motor de Combate Naval de Próxima Generación',
        'hero_desc': 'Experimenta tácticas de guerra de nivel de estudio en tu navegador. Comanda submarinos nucleares y burla a una IA adaptativa, con renderizado WebGL ultrarrápido y sin descargas.',
        'btn_start': 'Iniciar Simulación',
        'btn_manual': 'Leer Manual',
        'feat_title': 'Características <span>del Juego</span>',
        'feat_1_title': 'UX Optimizada para Móviles',
        'feat_1_desc': 'Juega sin problemas en cualquier dispositivo con UI adaptable, interfaz inteligente y gestos rápidos como doble toque para desplegar.',
        'feat_2_title': 'Motor de IA Adaptativa',
        'feat_2_desc': 'Enfréntate a un comandante de IA autónomo que evalúa el estado del tablero dinámicamente. Apoya estrategias automáticas y manuales.',
        'feat_3_title': 'Estética Neón',
        'feat_3_desc': 'Sumérgete en un entorno táctico de alta fidelidad con cartas 3D, partículas de impacto y un lenguaje de diseño naval cyberpunk cohesivo.',
        'footer_rights': '© 2026 Megumi Joy Studio. Todos los derechos reservados.',
        'footer_other': 'Otros Juegos',
        'footer_privacy': 'Privacidad',
        'footer_sitemap': 'Mapa del Sitio',
        'footer_contact': 'Contacto',
        'releases_title': 'Historial de <span class="accent">Versiones</span>',
        'releases_desc': 'Registro de cambios, actualizaciones y mejoras tácticas para el ecosistema de Sea Hunter.'
    },
    'ru': {
        'nav_home': 'Главная',
        'nav_play': 'Играть',
        'nav_manual': 'Руководство',
        'nav_releases': 'Обновления',
        'nav_rules': 'Правила',
        'nav_tutorial': 'Обучение',
        'nav_gallery': 'Галерея',
        'hero_tagline': 'Тактический Морской Движок Нового Поколения',
        'hero_desc': 'Окунитесь в тактические бои студийного уровня прямо в браузере. Командуйте ядерными подлодками, применяйте стелс и перехитрите адаптивный ИИ без скачиваний — с ультра-быстрым WebGL рендерингом.',
        'btn_start': 'Запуск Симуляции',
        'btn_manual': 'Читать Инструкцию',
        'feat_title': 'Особенности <span>Игры</span>',
        'feat_1_title': 'Мобильная Оптимизация UX',
        'feat_1_desc': 'Умный интерфейс сам подстраивается под экран. Добавлены интуитивные жесты: свайпы и дабл-тапы для мгновенной расстановки карт.',
        'feat_2_title': 'Адаптивный ИИ',
        'feat_2_desc': 'Сразитесь с автономным ИИ, который динамически оценивает угрозы. Плавный переход от ручной расстановки к автоматическим стратегиям.',
        'feat_3_title': 'Неоновая Эстетика',
        'feat_3_desc': 'Высокодетализированная 3D-среда, сочные эффекты частиц и единый киберпанк-дизайн военно-морского флота.',
        'footer_rights': '© 2026 Megumi Joy Studio. Все права защищены.',
        'footer_other': 'Другие Игры',
        'footer_privacy': 'Конфиденциальность',
        'footer_sitemap': 'Карта Сайта',
        'footer_contact': 'Контакты',
        'releases_title': 'История <span class="accent">Обновлений</span>',
        'releases_desc': 'Список изменений, патчей и тактических улучшений фреймворка Sea Hunter.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Handle theme logic globally
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
    }

    // Determine language, default to 'en'
    let currentLang = localStorage.getItem('lang') || 'en';
    applyTranslations(currentLang);

    // Setup buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selected = e.target.textContent.toLowerCase(); // en, es, ru
            applyTranslations(selected);
            localStorage.setItem('lang', selected);
        });
    });
});

function applyTranslations(lang) {
    if (!translations[lang]) lang = 'en'; // fallback

    // Update active button UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Translate DOM elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate theme button if present
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        if (document.body.classList.contains('light-theme')) {
            themeBtn.innerHTML = translations[lang]['theme_tactical'] || 'Tactical Mode';
        } else {
            themeBtn.innerHTML = translations[lang]['theme_comfort'] || 'Comfort Mode';
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const lang = localStorage.getItem('lang') || 'en';

    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    applyTranslations(lang);
}
