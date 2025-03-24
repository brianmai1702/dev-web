document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const languageToggle = document.getElementById("language-toggle");
    const title1 = document.getElementById("title1");
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
            "docu-btn" : "▶ Voir le documentaire",
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
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
        });
    }

    // Changer de langue au clic
    if (languageToggle) {
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
    }

    // Lien pour le trailer
    const trailerBtn = document.getElementById("trailer-btn");
    if (trailerBtn) {
        trailerBtn.addEventListener("click", () => {
            window.location.href = "https://drive.google.com/file/d/1SEl5rPANeRF5ryTSiJc1MR2m9KSFgBTT/view?usp=drive_link"; // Lien vidéo trailer
        });
    }

    // Lien pour le documentaire
    const docuBtn = document.getElementById("docu-btn");
    if (docuBtn) {
        docuBtn.addEventListener("click", () => {
            window.location.href = "https://drive.google.com/file/d/1SEl5rPANeRF5ryTSiJc1MR2m9KSFgBTT/view?usp=drive_link"; // Lien vidéo documentaire
        });
    }
});

// Code pour l'image et le carrousel
const images = [
    { src: "assets/images/jan_yoon_jung.png", name: "Jan Yoon Jung", desc: "Lorem ipsum dolor sit amet." },
    { src: "assets/images/nam_jin.png", name: "Nam Jin", desc: "Consectetur adipiscing elit." },
    { src: "assets/images/lee_nan_young.png", name: "Lee Nan Young", desc: "Pellentesque vehicula varius." },
    { src: "assets/images/young_tak.png", name: "Young Tak", desc: "Pellentesque vehicula varius." }
];

let currentIndex = 0;
const mainImage = document.getElementById("main-image");
const nextImage = document.getElementById("next-image");
const nameText = document.getElementById("name");
const description = document.getElementById("description");
const playButton = document.getElementById("play-button");

if (playButton) {
    playButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        
        nextImage.src = images[currentIndex].src;
        nextImage.style.transform = "translateY(-100%)";
        nextImage.classList.remove("blurred");
        
        setTimeout(() => {
            mainImage.src = images[currentIndex].src;
            nameText.textContent = images[currentIndex].name;
            description.textContent = images[currentIndex].desc;
            nextImage.style.transform = "translateY(0)";
            nextImage.classList.add("blurred");
        }, 500);
    });
}
