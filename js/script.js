document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const languageToggle = document.getElementById("language-toggle");

  const translations = {
    fr: {
      title1: "Le trot : Une histoire de génération",
      p1: "Les nouvelles générations considèrent que le trot est un genre musical obsolète...",
      "trailer-btn": "▶ Lancer le trailer",
      "docu-btn": "▶ Voir le documentaire",
      "menu-accueil": "Accueil",
      "menu-documentaire": "Documentaire",
      "menu-contexte": "Contexte historique",
      "menu-figures": "Figures",
      "menu-playlist": "Playlist",
    },
    ko: {
      title1: "트로트 : 세대의 역사",
      p1: "새로운 세대는 트로트를 오래된 음악 장르로 간주합니다...",
      "trailer-btn": "▶ 트레일러 시작",
      "docu-btn": "▶ 다큐멘터리 보기",
      "menu-accueil": "홈",
      "menu-documentaire": "다큐멘터리",
      "menu-contexte": "역사적 배경",
      "menu-figures": "인물",
      "menu-playlist": "재생 목록",
    },
  };

  let currentLang = "fr";

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "ko" : "fr";
      for (const id in translations[currentLang]) {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = translations[currentLang][id];
        }
      }
    });
  }

  const images = [
    {
      src: "assets/images/jang_yoon_jung.PNG",
      name: "Jang Yoon Jung",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "assets/images/nam_jin.PNG",
      name: "Nam Jin",
      desc: "Consectetur adipiscing elit.",
    },
    {
      src: "assets/images/lee_nan_young.PNG",
      name: "Lee Nan Young",
      desc: "Pellentesque vehicula varius.",
    },
    {
      src: "assets/images/young_tak.PNG",
      name: "Young Tak",
      desc: "Pellentesque vehicula varius.",
    },
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById("main-image");
  const nextImage = document.getElementById("next-image");
  const nameText = document.getElementById("name");
  const description = document.getElementById("description");
  const playButton = document.getElementById("play-button");

  function updateImage(index) {
    mainImage.src = images[index].src;
    nameText.textContent = images[index].name;
    description.textContent = images[index].desc;
    nextImage.src = images[(index + 1) % images.length].src; // L'image suivante
    nextImage.style.opacity = "0"; // On cache l'image suivante pour débuter
  }

  playButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    nextImage.style.opacity = "1"; // On affiche l'image suivante

    setTimeout(() => {
      updateImage(currentIndex);
      nextImage.style.opacity = "0"; // L'image suivante devient floue après le changement
    }, 500); // Le temps de transition est de 500 ms
  });

  updateImage(currentIndex); // Initialisation de la première image
});
