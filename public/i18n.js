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
        'releases_desc': 'Changelog, updates, and tactical improvements to the Sea Hunter framework.',
        'theme_tactical': 'Tactical Mode',
        'theme_comfort': 'Comfort Mode',
        'hero_subtitle': 'Tactical Naval Card Combat',
        'rules_title': 'Command Rules',
        'rules_deploy': 'Fleet Deployment',
        'rules_deploy_1': 'Deploy units to Frontline or Reserve.',
        'rules_deploy_2': 'Frontline units engage in direct combat.',
        'rules_deploy_3': 'Reserve units provide support and depth.',
        'rules_engage': 'Engagement',
        'rules_engage_1': 'Attack islands to gain tactical superiority.',
        'rules_engage_2': 'Mines and Subs provide hidden tactical layers.',
        'rules_engage_3': 'Victory is achieved by total fleet control.',
        'tut_title': 'Mission Guide',
        'tut_prep': '1. Preparation',
        'tut_prep_desc': 'Select your fleet from the lobby and enter the combat zone.',
        'tut_tact': '2. Tactics',
        'tut_tact_desc': 'Use the tactical analysis engine to predict enemy movements.',
        'tut_vict': '3. Victory',
        'tut_vict_desc': 'Execute successful strikes and secure the islands.',
        'gal_title': 'Intel Gallery',
        'gal_phone': 'Phone',
        'gal_tab7': '7" Tablet',
        'gal_tab10': '10" Tablet',
        'gal_pc': 'PC',
        'studio_title': 'Studio Hub',
        'studio_tiles_desc': 'Procedural world builder and puzzle adventure. Sync your progress across Sea Hunter.',
        'studio_view': 'View Project',
        'studio_future': 'Future Projects',
        'studio_future_desc': 'Developing high-motion tactical games with the Godify pipeline.',
        'footer_desc': 'Advancing Godot Engine performance through automation and premium design.',
        'footer_email': 'Email Support',
        'rel_1_title': 'v1.1.0 - Mobile Command Update',
        'rel_1_date': 'April 2026',
        'rel_1_desc': 'This major update brings Sea Hunter fully to mobile browsers, overhauling the Touch UX and fixing deep game logic state issues.',
        'rel_feat': 'New Features',
        'rel_1_feat_1': '<b>Dimension-Aware Scaling</b>: UI now calculates scale based on `min(viewport_x, viewport_y)`, ensuring perfect readability on both portrait and landscape devices.',
        'rel_1_feat_2': '<b>Advanced Touch Gestures</b>: Implemented long-press to drag, swipe-to-scroll, and double-tap to instantly deploy units.',
        'rel_1_feat_3': '<b>Dynamic HUD Stacking</b>: In portrait mode, UI panels automatically fold and stack to preserve screen real estate.',
        'rel_fix': 'Fixes',
        'rel_1_fix_1': '<b>AI Initialization Deadlock</b>: Fixed a bug where the AI player would refuse to deploy cards if the user bypassed the "Auto-Place" feature and manually dragged cards to the board.',
        'rel_1_fix_2': '<b>Debug Panel Occlusion</b>: Relocated dev-tools so they no longer block the Opponent\'s island powers on 6" smartphones.',
        'rel_0_title': 'v1.0.0 - The Neon Launch',
        'rel_0_date': 'March 2026',
        'rel_0_desc': 'The initial release of the Sea Hunter WebGL framework. Establishes the core gameplay loop and visual identity.',
        'rel_sys': 'System',
        'rel_0_sys_1': 'Tactical Card Combat Engine (Frontline/Reserve mechanics).',
        'rel_0_sys_2': 'Autonomous AI opponent capable of dynamic threat evaluation.',
        'rel_0_sys_3': 'Island Power System: Radar, Maneuver, Support, Camouflage.',
        'rel_0_sys_4': 'Cyberpunk "Neon" graphical standard integrated.'
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
        'releases_desc': 'Registro de cambios, actualizaciones y mejoras tácticas para el ecosistema de Sea Hunter.',
        'theme_tactical': 'Modo Táctico',
        'theme_comfort': 'Modo Confort',
        'hero_subtitle': 'Combate Naval Táctico con Cartas',
        'rules_title': 'Reglas de Mando',
        'rules_deploy': 'Despliegue de la Flota',
        'rules_deploy_1': 'Despliega unidades en Primera Línea o Reserva.',
        'rules_deploy_2': 'Las unidades de Primera Línea participan en combate directo.',
        'rules_deploy_3': 'Las unidades de Reserva brindan apoyo y profundidad.',
        'rules_engage': 'Enfrentamiento',
        'rules_engage_1': 'Ataca islas para obtener superioridad táctica.',
        'rules_engage_2': 'Las Minas y Submarinos proporcionan capas tácticas ocultas.',
        'rules_engage_3': 'La victoria se logra mediante el control total de la flota.',
        'tut_title': 'Guía de Misión',
        'tut_prep': '1. Preparación',
        'tut_prep_desc': 'Selecciona tu flota en el lobby y entra en la zona de combate.',
        'tut_tact': '2. Tácticas',
        'tut_tact_desc': 'Usa el motor de análisis táctico para predecir los movimientos enemigos.',
        'tut_vict': '3. Victoria',
        'tut_vict_desc': 'Ejecuta ataques exitosos y asegura las islas.',
        'gal_title': 'Galería de Inteligencia',
        'gal_phone': 'Teléfono',
        'gal_tab7': 'Tablet 7"',
        'gal_tab10': 'Tablet 10"',
        'gal_pc': 'PC',
        'studio_title': 'Centro del Estudio',
        'studio_tiles_desc': 'Creador de mundos procedurales y aventura de rompecabezas. Sincroniza tu progreso en Sea Hunter.',
        'studio_view': 'Ver Proyecto',
        'studio_future': 'Proyectos Futuros',
        'studio_future_desc': 'Desarrollando juegos tácticos de alta movilidad con Godify.',
        'footer_desc': 'Avanzando el rendimiento de Godot Engine a través de la automatización y el diseño premium.',
        'footer_email': 'Soporte por Email',
        'rel_1_title': 'v1.1.0 - Actualización de Comando Móvil',
        'rel_1_date': 'Abril 2026',
        'rel_1_desc': 'Esta actualización importante lleva Sea Hunter a los navegadores móviles, renovando la experiencia táctil y solucionando problemas lógicos.',
        'rel_feat': 'Nuevas Características',
        'rel_1_feat_1': '<b>Escalado Inteligente</b>: La interfaz ahora calcula la escala basada en `min(viewport_x, viewport_y)`, asegurando lectura perfecta en vertical y horizontal.',
        'rel_1_feat_2': '<b>Gestos Táctiles Avanzados</b>: Mantenimiento para arrastrar, deslizar para scrollear y doble toque para despliegue instantáneo.',
        'rel_1_feat_3': '<b>Apilado Dinámico de HUD</b>: En modo vertical, los paneles se pliegan y apilan automáticamente para ahorrar espacio en pantalla.',
        'rel_fix': 'Correcciones',
        'rel_1_fix_1': '<b>Bloqueo en la IA</b>: Corregido el error por el que la IA no desplegaba cartas si el jugador ignoraba "Auto-Colocar" y arrastraba sus cartas al tablero.',
        'rel_1_fix_2': '<b>Oclusión del Panel Debug</b>: Reubicadas las herramientas para que no bloqueen los poderes del oponente en smartphones de 6".',
        'rel_0_title': 'v1.0.0 - El Lanzamiento Neon',
        'rel_0_date': 'Marzo 2026',
        'rel_0_desc': 'El lanzamiento inicial de Sea Hunter WebGL. Establece el núcleo del juego y la identidad visual.',
        'rel_sys': 'Sistema',
        'rel_0_sys_1': 'Motor de Combate Táctico de Cartas (Primera Línea/Reserva).',
        'rel_0_sys_2': 'Oponente de IA autónomo capaz de evaluar amenazas dinámicamente.',
        'rel_0_sys_3': 'Sistema de Poderes de Isla: Radar, Maniobra, Soporte, Camuflaje.',
        'rel_0_sys_4': 'Gráficas Cyberpunk "Neon" integradas.'
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
        'releases_desc': 'Список изменений, патчей и тактических улучшений фреймворка Sea Hunter.',
        'theme_tactical': 'Тактический Режим',
        'theme_comfort': 'Комфортный Режим',
        'hero_subtitle': 'Тактические Карточные Морские Бои',
        'rules_title': 'Правила Командования',
        'rules_deploy': 'Развертывание Флота',
        'rules_deploy_1': 'Развертывайте юниты на Передовой или в Резерве.',
        'rules_deploy_2': 'Юниты Передовой вступают в прямой бой.',
        'rules_deploy_3': 'Юниты Резерва обеспечивают поддержку и глубину.',
        'rules_engage': 'Боевое Столкновение',
        'rules_engage_1': 'Атакуйте острова для получения тактического превосходства.',
        'rules_engage_2': 'Мины и подлодки обеспечивают скрытые тактические слои.',
        'rules_engage_3': 'Победа достигается полным контролем над флотом.',
        'tut_title': 'Гайд по Миссии',
        'tut_prep': '1. Подготовка',
        'tut_prep_desc': 'Выберите свой флот в лобби и войдите в зону боевых действий.',
        'tut_tact': '2. Тактика',
        'tut_tact_desc': 'Используйте движок тактического анализа для предсказания движений врага.',
        'tut_vict': '3. Победа',
        'tut_vict_desc': 'Проводите успешные удары и захватывайте острова.',
        'gal_title': 'Разведсводка',
        'gal_phone': 'Телефон',
        'gal_tab7': 'Планшет 7"',
        'gal_tab10': 'Планшет 10"',
        'gal_pc': 'ПК',
        'studio_title': 'Студия',
        'studio_tiles_desc': 'Процедурный конструктор миров и головоломка. Синхронизируйте прогресс с Sea Hunter.',
        'studio_view': 'Смотреть Проект',
        'studio_future': 'Будущие Проекты',
        'studio_future_desc': 'Разработка высокодинамичных тактических игр на базе Godify.',
        'footer_desc': 'Повышение производительности Godot Engine за счет автоматизации и премиального дизайна.',
        'footer_email': 'Поддержка по Email',
        'rel_1_title': 'v1.1.0 - Мобильное Обновление',
        'rel_1_date': 'Апрель 2026',
        'rel_1_desc': 'Это крупное обновление полностью переносит Sea Hunter в мобильные браузеры, перерабатывая сенсорный UX и исправляя глубокие логические ошибки.',
        'rel_feat': 'Новые Функции',
        'rel_1_feat_1': '<b>Умное Масштабирование</b>: UI вычисляет масштаб на основе `min(viewport_x, viewport_y)`, обеспечивая читаемость в любом положении.',
        'rel_1_feat_2': '<b>Продвинутые Жесты</b>: Добавлено долгое нажатие для перетаскивания, свайп для прокрутки и двойной тап для развертывания.',
        'rel_1_feat_3': '<b>Динамический HUD</b>: В портретном режиме панели складываются автоматически для экономии места.',
        'rel_fix': 'Исправления',
        'rel_1_fix_1': '<b>Взаимоблокировка ИИ</b>: ИИ больше не зависает, если игрок решает вручную выставить карты вместо "Авто-Расстановки".',
        'rel_1_fix_2': '<b>Перекрытие Панелей</b>: Инструменты отладки больше не закрывают способности острова на 6" экранах.',
        'rel_0_title': 'v1.0.0 - Неоновый Релиз',
        'rel_0_date': 'Март 2026',
        'rel_0_desc': 'Первоначальный релиз Sea Hunter WebGL. Закладывает основу цикла геймплея и визуального стиля.',
        'rel_sys': 'Система',
        'rel_0_sys_1': 'Тактический Движок Карточных Боев (Передовая/Резерв).',
        'rel_0_sys_2': 'Автономный ИИ-оппонент, оценивающий угрозы.',
        'rel_0_sys_3': 'Способности Острова: Радар, Маневр, Поддержка, Камуфляж.',
        'rel_0_sys_4': 'Интегрирован киберпанк "Неон" графический стиль.'
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
