const questionsData = {
  Riyaziyyat: [
    {
      id: 1,
      question: "2³ + 3² − 5 ifadəsinin dəyəri nə qədərdir?",
      options: ["12", "18", "10", "15"],
      correct: 2,
    },
    {
      id: 2,
      question:
        "Daxili bucaqları 45° və 65° olan üçbucağın üçüncü bucağı neçə dərəcədir?",
      options: ["70°", "80°", "90°", "110°"],
      correct: 0,
    },
    {
      id: 3,
      question: "1, 1, 2, 3, 5, 8... ardıcıllığında növbəti ədəd hansıdır?",
      options: ["11", "12", "13", "14"],
      correct: 1,
    },
  ],
  "Rəqəmsal Texnologiyalar": [
    {
      id: 1,
      question: "API nə deməkdir?",
      options: [
        "Advanced Programming Interface",
        "Application Programming Interface",
        "Automated Process Integration",
        "Artificial Processing Intelligence",
      ],
      correct: 1,
    },
    {
      id: 2,
      question: "LIFO prinsipi ilə işləyən verilənlər strukturu hansıdır?",
      options: ["Queue", "Array", "Stack", "Linked List"],
      correct: 2,
    },
    {
      id: 3,
      question: "13 onluq ədədinin ikilik forması hansıdır?",
      options: ["1100", "1101", "1110", "1011"],
      correct: 1,
    },
  ],
  "Təbiət və Humanitar Elmlər": [
    {
      id: 1,
      question: "Karbon elementinin atom nömrəsi neçədir?",
      options: ["6", "8", "12", "14"],
      correct: 0,
    },
    {
      id: 2,
      question: "Ümumi nisbilik nəzəriyyəsini kim irəli sürdü?",
      options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
      correct: 2,
    },
    {
      id: 3,
      question:
        "Ən qədim yazı sistemi (mixi yazı) hansı sivilizasiyaya aiddir?",
      options: ["Misirlilər", "Yunanlar", "Sumerlər", "Romanlar"],
      correct: 2,
    },
  ],
  "Mədəniyyət və İncəsənət": [
    {
      id: 1,
      question: "Sistine Chapel tavanını kim rəngləmişdir?",
      options: ["Rafael", "Leonardo da Vinci", "Mikelandjelo", "Donatello"],
      correct: 2,
    },
    {
      id: 2,
      question: "İlk müasir Olimpiya Oyunları hansı şəhərdə keçirilmişdir?",
      options: ["Paris", "London", "Afina", "Roma"],
      correct: 2,
    },
    {
      id: 3,
      question:
        "Pyotr Çaykovskinin məşhur “Qu quşu gölü” baletinin əsas mövzusu nədir?",
      options: [
        "Qozfındıq",
        "Qu quşu gölü",
        "Yatan gözəl",
        "Romeo və Cülyetta",
      ],
      correct: 1,
    },
  ],
};

const categoriesList = [
  { name: "Riyaziyyat", icon: "📐", color: "cyan" },
  { name: "Rəqəmsal Texnologiyalar", icon: "💻", color: "emerald" },
  { name: "Təbiət və Humanitar Elmlər", icon: "🧬", color: "violet" },
  { name: "Mədəniyyət və İncəsənət", icon: "🎭", color: "amber" },
];
