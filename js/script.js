document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const languageToggle = document.getElementById("language-toggle");
    const title = document.querySelector("h1");
    const paragraph = document.querySelector("p");
    const trailerBtn = document.getElementById("trailer-btn");
    
    const translations = {
        fr: {
            title: "Le trot : Une histoire de génération",
            paragraph: "Les nouvelles générations considèrent que le trot est un genre musical obsolète. Pourtant, avec l’industrialisation de la musique, la popularité de certains TV shows tel que Mr Trot et la modernisation du trot vers le néo-trot, nous constatons son regain de popularité. Comment l’expliquer ?",
            trailer: "▶ Lancer le trailer"
        },
        ko: {
            title: "트로트 : 세대의 역사",
            paragraph: "새로운 세대는 트로트를 오래된 음악 장르로 간주합니다. 하지만 음악의 산업화, Mr Trot과 같은 TV 쇼의 인기, 그리고 네오 트로트로의 현대화로 인해 트로트의 인기가 다시 상승하고 있습니다. 이를 어떻게 설명할 수 있을까요?",
            trailer: "▶ 트레일러 시작"
        }
    };
    
    let currentLanguage = "fr";
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
    });
    
    languageToggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "fr" ? "ko" : "fr";
        title.textContent = translations[currentLanguage].title;
        paragraph.textContent = translations[currentLanguage].paragraph;
        trailerBtn.textContent = translations[currentLanguage].trailer;
    });
});