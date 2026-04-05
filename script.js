let currentCategory = null;
let currentQuestions = [];
let currentIndex = 0;
let selectedAnswers = [];
let timerInterval = null;
let timeLeft = 20;

function initApp() {
  renderCategoryCards();
}

function renderCategoryCards() {
  const grid = document.getElementById("categories-grid");
  grid.innerHTML = "";

  categoriesList.forEach((cat) => {
    const cardHTML = `
    <div onclick="startQuiz('${cat.name}')" 
         class="group bg-blue-100 border border-blue-200 hover:bg-blue-200 rounded-3xl p-8 text-center cursor-pointer hover:-translate-y-3 hover:shadow-xl transition-all duration-300">
        <div class="text-7xl mb-6">${cat.icon}</div>
        <h3 class="text-3xl font-semibold mb-2 text-blue-900">${cat.name}</h3>
        <p class="text-blue-700 text-sm">20 saniyə / sual</p>
    </div>`;
    grid.innerHTML += cardHTML;
  });
}

function startQuiz(categoryName) {
  currentCategory = categoryName;
  currentQuestions = questionsData[categoryName];
  currentIndex = 0;
  selectedAnswers = new Array(currentQuestions.length).fill(null);

  document.getElementById("category-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("header-info").classList.remove("hidden");

  document.getElementById("current-category-display").textContent =
    categoryName;
  document.getElementById("quiz-category-badge").textContent = categoryName;

  loadCurrentQuestion();
}

function loadCurrentQuestion() {
  const q = currentQuestions[currentIndex];

  document.getElementById("question-counter").textContent = currentIndex + 1;
  document.getElementById("total-questions").textContent = currentQuestions.length;

  document.getElementById("question-text").innerHTML = `
        <span class="text-blue-600 block mb-4 text-xl">Sual ${currentIndex + 1}</span>
        <span class="text-blue-800 text-2xl">${q.question}</span>
    `;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  q.options.forEach((option, i) => {
    const div = document.createElement("div");
    div.className = `px-8 py-6 bg-blue-50 hover:bg-blue-100 rounded-3xl text-xl cursor-pointer flex items-center border border-blue-200 transition-all duration-300`;
    div.innerHTML = `<span class="font-mono text-blue-500 w-10">${String.fromCharCode(65 + i)}</span> ${option}`;
    div.onclick = () => handleAnswerSelection(i);
    container.appendChild(div);
  });

  // Timer yalnız əgər cavab seçilməyibsə başlasın
  if (selectedAnswers[currentIndex] === null) {
    startTimer();
  } else {
    showFeedbackForPreviousAnswer();
  }
}

// Yeni funksiya: əvvəl seçilmiş cavabı göstərmək üçün
function showFeedbackForPreviousAnswer() {
  const q = currentQuestions[currentIndex];
  const selected = selectedAnswers[currentIndex];
  const options = document.querySelectorAll("#options-container > div");

  options.forEach((opt, i) => {
    opt.style.pointerEvents = "none"; // artıq klikləməyə icazə yoxdur
    if (i === q.correct) {
      opt.classList.add("!bg-emerald-500", "!text-slate-950");
    } else if (i === selected && i !== q.correct) {
      opt.classList.add("!bg-red-500", "!text-slate-950");
    }
  });
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = 20;
  document.getElementById("timer-display").textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer-display").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function handleAnswerSelection(selectedIndex) {
  if (selectedAnswers[currentIndex] !== null) return;

  selectedAnswers[currentIndex] = selectedIndex;
  clearInterval(timerInterval);
  showFeedback();
}

function showFeedback() {
  const q = currentQuestions[currentIndex];
  const selected = selectedAnswers[currentIndex];
  const options = document.querySelectorAll("#options-container > div");

  options.forEach((opt, i) => {
    opt.style.pointerEvents = "none";
    if (i === q.correct) {
      opt.classList.add("!bg-emerald-500", "!text-slate-950");
    } else if (i === selected && i !== q.correct) {
      opt.classList.add("!bg-red-500", "!text-slate-950");
    }
  });

  setTimeout(() => {
    nextQuestion();
  }, 1600);
}

function handleTimeout() {
  selectedAnswers[currentIndex] = null; // vaxt bitdi = səhv
  showFeedback();
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    finishQuiz();
  } else {
    loadCurrentQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadCurrentQuestion();
  }
}

function finishQuiz() {
  clearInterval(timerInterval);

  let correctCount = 0;
  currentQuestions.forEach((q, i) => {
    if (selectedAnswers[i] === q.correct) correctCount++;
  });

  const incorrectCount = currentQuestions.length - correctCount;

  // Nəticə ekranını göstər
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("incorrect-count").textContent = incorrectCount;

  // Bal faizini gizlədirik
  document.getElementById("score-percentage").parentElement.style.display =
    "none";
}

function goBackToCategories() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("category-screen").classList.remove("hidden");
  document.getElementById("header-info").classList.add("hidden");
}

function restartSameCategory() {
  if (currentCategory) startQuiz(currentCategory);
}

// Səhifə yüklənəndə işə sal
window.onload = initApp;
