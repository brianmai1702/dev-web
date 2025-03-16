document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const languageToggle = document.getElementById("language-toggle");
    const title1 = document.getElementById("title1");  // Utiliser id pour un seul élément
    const title2 = document.getElementById("title2");
    const title3 = document.getElementById("title3");
    const title4 = document.getElementById("title4");
    const title5 = document.getElementById("title5");
    const title6 = document.getElementById("title6");
    const p1 = document.getElementById("p1");
    
    const translations = {
        fr: {
            "title1": "Le trot : Une histoire de génération",
            "p1": "Les nouvelles générations considèrent que le trot est un genre musical obsolète. Pourtant, avec l’industrialisation de la musique, la popularité de certains TV shows tel que Mr Trot et la modernisation du trot vers le néo-trot, nous constatons son regain de popularité. Comment l’expliquer ?",
            "trailer-btn": "▶ Lancer le trailer",
            "title2" : "Bienvenue sur la page d'accueil",
            "title3" : "Bienvenue sur la page documentaire",
            "title4" : "Bienvenue sur la page contexte historique",
            "title5" : "Bienvenue sur la page figures",
            "title6" : "Bienvenue sur la page playlist",
            "docu-btn" : "▶ Visionner le documentaire",
            "menu-accueil": "Accueil",
            "menu-documentaire": "Documentaire",
            "menu-contexte": "Contexte historique",
            "menu-figures": "Figures",
            "menu-playlist": "Playlist"
        },
        ko: {
            "title1": "트로트 : 세대의 역사",
            "p1": "새로운 세대는 트로트를 오래된 음악 장르로 간주합니다. 하지만 음악의 산업화, Mr Trot과 같은 TV 쇼의 인기, 그리고 네오 트로트로의 현대화로 인해 트로트의 인기가 다시 상승하고 있습니다. 이를 어떻게 설명할 수 있을까요?",
            "trailer-btn": "▶ 트레일러 시작",
            "title2" :"홈페이지에 오신 것을 환영합니다",
            "title3" : "다큐멘터리 페이지에 오신 것을 환영합니다",
            "title4" : "역사적 배경 페이지에 오신 것을 환영합니다",
            "title5" : "피겨 페이지에 오신 것을 환영합니다",
            "title6" : "재생 목록 페이지에 오신 것을 환영합니다",
            "docu-btn" : "▶ 다큐멘터리 보기",
            "menu-accueil": "홈",
            "menu-documentaire": "다큐멘터리",
            "menu-contexte": "역사적 배경",
            "menu-figures": "인물",
            "menu-playlist": "재생 목록"
        }
    };

    let currentLang = "fr"; // Langue par défaut

    // Changer de thème au clic
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
    });

    // Changer de langue au clic
    languageToggle.addEventListener("click", () => {
        // Basculer la langue
        currentLang = currentLang === "fr" ? "ko" : "fr";
    
        // Appliquer la traduction
        for (const id in translations[currentLang]) {
            const element = document.getElementById(id);
            if (element) { // Vérifier que l'élément existe avant de modifier son contenu
                element.textContent = translations[currentLang][id];
            }
        }
    });

    // Gérer les boutons pour le trailer et le documentaire
    const trailerBtn = document.getElementById("trailer-btn");
    const docuBtn = document.getElementById("docu-btn");

    // Lien pour le trailer
    trailerBtn.addEventListener("click", () => {
        window.location.href = "https://drive.google.com/file/d/1SEl5rPANeRF5ryTSiJc1MR2m9KSFgBTT/view?usp=drive_link"; // Lien vidéo trailer
    });

    // Lien pour le documentaire
    docuBtn.addEventListener("click", () => {
        window.location.href = "https://drive.google.com/file/d/1SEl5rPANeRF5ryTSiJc1MR2m9KSFgBTT/view?usp=drive_link"; // Lien vidéo docu
    });
});