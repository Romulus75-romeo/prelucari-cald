// ===============================
// PLATFORMĂ EDUCAȚIONALĂ - PRELUCĂRI LA CALD
// ===============================

// ===============================
// NAVIGATION
// ===============================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Active navigation on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===============================
// TEST DATA
// ===============================
const testData = {
    desen: {
        title: 'Test Desen Tehnic',
        questions: [
            {
                question: 'Care este scara de reprezentare 2:1?',
                answers: ['Scară de micșorare', 'Scară de mărire', 'Scară naturală', 'Scară standard'],
                correct: 1
            },
            {
                question: 'Ce reprezintă simbolul Ø în cotarea desenului tehnic?',
                answers: ['Raza', 'Diametrul', 'Pătratul', 'Unghiul'],
                correct: 1
            },
            {
                question: 'Ce parametru de rugozitate reprezintă abaterea medie aritmetică?',
                answers: ['Rz', 'Rmax', 'Ra', 'Rt'],
                correct: 2
            },
            {
                question: 'În ce unitate de măsură se exprimă rugozitatea?',
                answers: ['Milimetri (mm)', 'Micrometri (μm)', 'Centimetri (cm)', 'Nanometri (nm)'],
                correct: 1
            },
            {
                question: 'Ce indică simbolul de sudură cu triunghi (△)?',
                answers: ['Sudură cap la cap', 'Sudură în colț', 'Sudură prin puncte', 'Sudură în T'],
                correct: 1
            },
            {
                question: 'Linia de referință în simbolul de sudură este:',
                answers: ['Întreruptă', 'Continuă orizontală', 'Punctată', 'Ondulată'],
                correct: 1
            },
            {
                question: 'Ce scară se folosește pentru reprezentarea pieselor foarte mici?',
                answers: ['1:10', '1:1', '5:1', '1:5'],
                correct: 2
            },
            {
                question: 'Liniile de cotă se desenează cu:',
                answers: ['Linie groasă continuă', 'Linie subțire continuă', 'Linie întreruptă', 'Linie punct'],
                correct: 1
            },
            {
                question: 'Simbolul pentru sudură pe tot conturul este:',
                answers: ['Triunghi', 'Pătrat', 'Cerc', 'Semicerc'],
                correct: 2
            },
            {
                question: 'Ce reprezintă notația V la rosturi de sudură?',
                answers: ['Rost în formă de V', 'Viteza de sudare', 'Volum de material', 'Valoare nominală'],
                correct: 0
            },
            {
                question: 'Conform standardului, scara 1:2 înseamnă:',
                answers: ['Piesa din desen este de 2 ori mai mare', 'Piesa din desen este de 2 ori mai mică', 'Piesa este la scară naturală', 'Piesa este la scară 50%'],
                correct: 1
            },
            {
                question: 'Ce valoare Ra indică o suprafață foarte netedă?',
                answers: ['Ra 25', 'Ra 12.5', 'Ra 0.4', 'Ra 6.3'],
                correct: 2
            },
            {
                question: 'Săgețile liniilor de cotă indică:',
                answers: ['Direcția de vizualizare', 'Limitele dimensiunii', 'Tipul materialului', 'Rugozitatea'],
                correct: 1
            },
            {
                question: 'Simbolul de sudură se plasează:',
                answers: ['Oriunde pe desen', 'Pe linia de referință', 'În cartușul desenului', 'Pe conturul piesei'],
                correct: 1
            },
            {
                question: 'Ce standard internațional reglementează simbolurile de sudură?',
                answers: ['ISO 128', 'ISO 2553', 'ISO 9001', 'ISO 1101'],
                correct: 1
            }
        ]
    },
    sudura: {
        title: 'Test Îmbinări Sudate',
        questions: [
            {
                question: 'Care procedeu de sudare folosește electrod învelit care se topește?',
                answers: ['TIG', 'MIG/MAG', 'MMA/SMAW', 'Sudură prin frecare'],
                correct: 2
            },
            {
                question: 'Ce gaz se utilizează la sudarea MIG?',
                answers: ['Oxigen', 'Azot', 'Argon sau amestec Ar+CO2', 'Hidrogen'],
                correct: 2
            },
            {
                question: 'La sudarea TIG, electrodul de wolfram este:',
                answers: ['Topibil', 'Netopibil', 'Parțial topibil', 'Combustibil'],
                correct: 1
            },
            {
                question: 'Care este formula empirică pentru calculul curentului de sudare?',
                answers: ['I = 10 × d', 'I = (30-40) × d', 'I = 100 × d', 'I = d / 2'],
                correct: 1
            },
            {
                question: 'Ce defect apare din cauza răcirii prea rapide a sudurii?',
                answers: ['Porozități', 'Fisuri', 'Incluziuni', 'Supraînălțare'],
                correct: 1
            },
            {
                question: 'Controlul vizual (VT) detectează:',
                answers: ['Defecte interne', 'Defecte de suprafață', 'Tensiuni interne', 'Compoziția chimică'],
                correct: 1
            },
            {
                question: 'Unghiul de teșire pentru rostul V este de obicei:',
                answers: ['10-15°', '30-35°', '60-70°', '90°'],
                correct: 1
            },
            {
                question: 'Ce metodă de control folosește raze X sau gamma?',
                answers: ['Control ultrasonic', 'Control radiografic', 'Lichide penetrante', 'Pulberi magnetice'],
                correct: 1
            },
            {
                question: 'Polaritatea DC+ înseamnă că electrodul este:',
                answers: ['Negativ', 'Pozitiv', 'Neutru', 'Alternativ'],
                correct: 1
            },
            {
                question: 'Incluziunile de zgură apar din cauza:',
                answers: ['Curentului prea mare', 'Curățării insuficiente între straturi', 'Vitezei prea mici', 'Gazului insuficient'],
                correct: 1
            },
            {
                question: 'Sudarea MAG folosește ca gaz de protecție:',
                answers: ['Argon pur', 'CO2 sau amestec cu CO2', 'Heliu', 'Azot'],
                correct: 1
            },
            {
                question: 'Lipsa de pătrundere apare când:',
                answers: ['Curentul este prea mare', 'Curentul este prea mic', 'Tensiunea este prea mare', 'Gazul este insuficient'],
                correct: 1
            },
            {
                question: 'Controlul cu lichide penetrante este eficient pentru:',
                answers: ['Defecte interne', 'Fisuri deschise la suprafață', 'Compoziție chimică', 'Duritate'],
                correct: 1
            },
            {
                question: 'Rostul în X se folosește pentru:',
                answers: ['Grosimi mici', 'Grosimi mari, sudare pe ambele fețe', 'Sudură prin puncte', 'Sudură în colț'],
                correct: 1
            },
            {
                question: 'Tensiunea arcului la MIG/MAG este de obicei:',
                answers: ['5-10 V', '18-26 V', '50-60 V', '100-200 V'],
                correct: 1
            },
            {
                question: 'Porozitățile sunt cauzate de:',
                answers: ['Curent prea mic', 'Gaze captive în băița de sudură', 'Viteză prea mică', 'Unghi greșit'],
                correct: 1
            },
            {
                question: 'Deformațiile după sudare sunt cauzate de:',
                answers: ['Curent prea mic', 'Contracții la răcire', 'Electrozi uscați', 'Gaz în exces'],
                correct: 1
            },
            {
                question: 'Controlul ultrasonic folosește:',
                answers: ['Raze X', 'Unde sonore de înaltă frecvență', 'Câmp magnetic', 'Curent electric'],
                correct: 1
            },
            {
                question: 'Electrodul E7018 este un electrod:',
                answers: ['Rutilic', 'Celulozic', 'Bazic', 'Acid'],
                correct: 2
            },
            {
                question: 'Viteza de sudare influențează:',
                answers: ['Culoarea sudurii', 'Lățimea și pătrunderea cordonului', 'Tipul electrodului', 'Tipul gazului'],
                correct: 1
            }
        ]
    },
    ssm: {
        title: 'Test Protecția Muncii',
        questions: [
            {
                question: 'Care este legea principală privind securitatea și sănătatea în muncă?',
                answers: ['Legea 53/2003', 'Legea 319/2006', 'Legea 31/1990', 'Legea 188/1999'],
                correct: 1
            },
            {
                question: 'Ce tip de radiație de la arc poate cauza conjunctivită?',
                answers: ['Infraroșii', 'Ultraviolete', 'Vizibile', 'Radio'],
                correct: 1
            },
            {
                question: 'Masca de sudură trebuie să aibă filtru cu grad DIN:',
                answers: ['DIN 1-3', 'DIN 5-7', 'DIN 9-13', 'DIN 15-18'],
                correct: 2
            },
            {
                question: 'Tensiunea în gol la echipamentele de sudare poate fi:',
                answers: ['10-20 V', '60-90 V', '150-200 V', '300-400 V'],
                correct: 1
            },
            {
                question: 'Ce echipament protejează împotriva stropilor de metal topit?',
                answers: ['Ochelari de vedere', 'Șorț din piele', 'Cască de construcții', 'Mănuși de bumbac'],
                correct: 1
            },
            {
                question: 'Cât timp trebuie supravegheat locul de muncă după terminarea sudării?',
                answers: ['5 minute', '15 minute', '30 minute', '1 oră'],
                correct: 2
            },
            {
                question: 'Normele specifice pentru sudare sunt reglementate de:',
                answers: ['NSSM 1', 'NSSM 2', 'NSSM 3', 'NSSM 10'],
                correct: 1
            },
            {
                question: 'Ce substanță toxică poate rezulta din sudarea oțelului galvanizat?',
                answers: ['Oxid de carbon', 'Oxid de zinc', 'Oxid de fier', 'Dioxid de carbon'],
                correct: 1
            },
            {
                question: 'Distanța minimă de siguranță față de materialele inflamabile este:',
                answers: ['2 metri', '5 metri', '10 metri', '15 metri'],
                correct: 2
            },
            {
                question: 'Ce tip de stingător este recomandat pentru sudură?',
                answers: ['Cu apă', 'Cu spumă', 'Cu CO2 sau pulbere', 'Cu nisip'],
                correct: 2
            },
            {
                question: 'Bocancii de protecție pentru sudori trebuie să aibă:',
                answers: ['Toc înalt', 'Bombeu metalic', 'Talpă de cauciuc moale', 'Șireturi lungi'],
                correct: 1
            },
            {
                question: 'Principalul risc al fumului de sudură este:',
                answers: ['Arsuri', 'Afecțiuni respiratorii', 'Electrocutare', 'Orbire'],
                correct: 1
            },
            {
                question: 'Îmbrăcămintea de protecție pentru sudare trebuie să fie conform standardului:',
                answers: ['EN 166', 'EN ISO 11611', 'EN 388', 'EN 12477'],
                correct: 1
            },
            {
                question: 'Gazul argon utilizat la sudare este:',
                answers: ['Toxic', 'Inflamabil', 'Inert și netoxic', 'Exploziv'],
                correct: 2
            },
            {
                question: 'Pentru sudare în spații închise este obligatorie:',
                answers: ['Pauza de masă', 'Ventilația adecvată', 'Muzica de fond', 'Iluminatul natural'],
                correct: 1
            }
        ]
    },
    final: {
        title: 'Test Final Complet',
        questions: [] // Will be populated from all tests
    }
};

// Populate final test with questions from all categories
testData.final.questions = [
    ...testData.desen.questions.slice(0, 17),
    ...testData.sudura.questions.slice(0, 17),
    ...testData.ssm.questions.slice(0, 16)
];

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ===============================
// TIMER FUNCTIONALITY
// ===============================
let timerInterval;
let timeLeft;
const TEST_DURATIONS = {
    desen: 15 * 60, // 15 minutes
    sudura: 20 * 60, // 20 minutes
    ssm: 15 * 60,   // 15 minutes
    final: 45 * 60   // 45 minutes
};

function startTestTimer(duration) {
    const timerDisplay = document.getElementById('testTimer');
    if (!timerDisplay) return;

    timerDisplay.style.display = 'flex';
    timerDisplay.classList.remove('warning');
    timeLeft = duration;
    updateTimerDisplay();

    // Clear any existing timer
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitTest();
            // showToast function might not be defined universally, so check or just alert/console
            if (typeof showToast === 'function') {
                showToast('Timpul a expirat! Testul a fost trimis automat.', 'warning');
            } else {
                alert('Timpul a expirat! Testul a fost trimis automat.');
            }
        } else if (timeLeft <= 60) {
            timerDisplay.classList.add('warning');
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    const timerDisplay = document.getElementById('testTimer');
    if (timerDisplay) {
        timerDisplay.style.display = 'none';
        timerDisplay.classList.remove('warning');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timerDisplay = document.getElementById('testTimer');
    if (timerDisplay) timerDisplay.textContent = `⏱️ ${display}`;
}

// ===============================
// TEST FUNCTIONALITY
// ===============================
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let testQuestions = [];

function startTest(testType) {
    currentTest = testType;
    currentQuestionIndex = 0;
    userAnswers = [];

    // Get questions and shuffle them
    testQuestions = shuffleArray(testData[testType].questions);

    // Show modal
    const modal = document.getElementById('testModal');
    const testTitle = document.getElementById('testTitle');

    testTitle.textContent = testData[testType].title;
    modal.classList.add('active');

    // Reset results
    document.getElementById('testResults').style.display = 'none';
    document.querySelector('.modal-body').style.display = 'block';

    // Initialize answers array
    userAnswers = new Array(testQuestions.length).fill(null);

    // Show first question
    showQuestion(0);

    // Start Timer
    if (TEST_DURATIONS[testType]) {
        startTestTimer(TEST_DURATIONS[testType]);
    } else {
        startTestTimer(15 * 60); // Default 15 min
    }
}

function showQuestion(index) {
    const question = testQuestions[index];
    const container = document.getElementById('questionContainer');

    // Update progress
    const progress = ((index + 1) / testQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('questionCounter').textContent = `${index + 1}/${testQuestions.length}`;

    // Generate question HTML
    container.innerHTML = `
        <p class="question-text">${index + 1}. ${question.question}</p>
        <div class="answers-list">
            ${question.answers.map((answer, i) => `
                <label class="answer-option ${userAnswers[index] === i ? 'selected' : ''}" data-index="${i}">
                    <input type="radio" name="answer" value="${i}" ${userAnswers[index] === i ? 'checked' : ''}>
                    <span class="answer-marker">${String.fromCharCode(65 + i)}</span>
                    <span class="answer-text">${answer}</span>
                </label>
            `).join('')}
        </div>
    `;

    // Add event listeners to answers
    container.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', () => selectAnswer(parseInt(option.dataset.index)));
    });

    // Update navigation buttons
    document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline-flex';
    document.getElementById('nextBtn').style.display = index === testQuestions.length - 1 ? 'none' : 'inline-flex';
    document.getElementById('submitBtn').style.display = index === testQuestions.length - 1 ? 'inline-flex' : 'none';
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;

    // Update UI
    document.querySelectorAll('.answer-option').forEach((option, i) => {
        option.classList.toggle('selected', i === answerIndex);
    });
}

function nextQuestion() {
    if (currentQuestionIndex < testQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function submitTest() {
    stopTimer();
    // Calculate score
    let correctCount = 0;
    testQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / testQuestions.length) * 100);

    // Hide questions, show results
    document.querySelector('.modal-body').style.display = 'none';
    const results = document.getElementById('testResults');
    results.style.display = 'block';

    // Animate score circle
    const circle = document.getElementById('resultCircle');
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;

    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
        circle.style.stroke = percentage >= 50 ? '#10b981' : '#ef4444';
    }, 100);

    // Update score display
    document.getElementById('resultScore').textContent = `${percentage}%`;

    // Generate details
    let gradeText = '';
    if (percentage >= 90) gradeText = 'Excelent! 🏆';
    else if (percentage >= 70) gradeText = 'Foarte bine! 👍';
    else if (percentage >= 50) gradeText = 'Bine! Continuă să înveți! 📚';
    else gradeText = 'Mai trebuie să studiezi! 💪';

    document.getElementById('resultDetails').innerHTML = `
        <p><strong>${gradeText}</strong></p>
        <p>Răspunsuri corecte: ${correctCount} din ${testQuestions.length}</p>
        <p>Nota: ${Math.round(percentage / 10)}</p>
    `;
}

function closeTest() {
    stopTimer();
    document.getElementById('testModal').classList.remove('active');
    currentTest = null;

    // Reset progress circle
    document.getElementById('resultCircle').style.strokeDashoffset = 283;
}

// Close modal on outside click
document.getElementById('testModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'testModal') {
        closeTest();
    }
});

// ===============================
// CHAPTER EXPAND FUNCTIONALITY
// ===============================
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const card = this.closest('.chapter-card');
        card.classList.toggle('expanded');
        this.textContent = card.classList.contains('expanded') ? 'Ascunde Detalii' : 'Vezi Detalii Complete';
    });
});

// ===============================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================
// ANIMATION ON SCROLL
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.chapter-card, .test-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ===============================
// KEYBOARD NAVIGATION FOR TESTS
// ===============================
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('testModal').classList.contains('active')) return;

    switch (e.key) {
        case 'ArrowLeft':
            prevQuestion();
            break;
        case 'ArrowRight':
            if (currentQuestionIndex < testQuestions.length - 1) {
                nextQuestion();
            }
            break;
        case '1':
        case 'a':
        case 'A':
            selectAnswer(0);
            break;
        case '2':
        case 'b':
        case 'B':
            selectAnswer(1);
            break;
        case '3':
        case 'c':
        case 'C':
            selectAnswer(2);
            break;
        case '4':
        case 'd':
        case 'D':
            selectAnswer(3);
            break;
        case 'Enter':
            if (currentQuestionIndex === testQuestions.length - 1) {
                submitTest();
            } else {
                nextQuestion();
            }
            break;
        case 'Escape':
            closeTest();
            break;
    }
});

// ===============================
// CONSOLE LOG
// ===============================
console.log('🔥 Platformă Educațională - Prelucrări la Cald');
console.log('📚 Modulul 4 CDL - Liceul Tehnologic "Aurel Vlaicu" Galați');
console.log('👨‍🏫 Prof. Ing. Popescu Romulus');

// ===============================
// TEXT-TO-SPEECH SYSTEM
// ===============================
let ttsUtterance = null;
let ttsText = '';
let ttsPosition = 0;
let ttsPaused = false;
let ttsActive = false;

function getVisibleSectionText() {
    const sections = document.querySelectorAll('.chapter-card, .section-header, .theory-box');
    let text = '';
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            text += section.innerText + ' ';
        }
    });
    return text || 'Selectați o secțiune pentru a citi conținutul.';
}

function toggleTTS() {
    if (ttsActive) {
        stopTTS();
    } else {
        startTTS();
    }
}

function startTTS() {
    if (!('speechSynthesis' in window)) {
        showToast('Browserul nu suportă citirea vocală', 'error');
        return;
    }

    window.speechSynthesis.cancel();

    ttsText = getVisibleSectionText();
    ttsPosition = 0;
    ttsActive = true;
    ttsPaused = false;

    speakFromPosition();
    updateTTSButtons();
    document.getElementById('ttsIndicator').classList.add('active');
    showToast('🔊 Citire vocală pornită', 'info');
}

function speakFromPosition() {
    const textToSpeak = ttsText.substring(ttsPosition);
    if (!textToSpeak) {
        stopTTS();
        return;
    }

    ttsUtterance = new SpeechSynthesisUtterance(textToSpeak);
    ttsUtterance.lang = 'ro-RO';
    ttsUtterance.rate = 0.9;
    ttsUtterance.pitch = 1;

    // Find Romanian voice
    const voices = window.speechSynthesis.getVoices();
    const roVoice = voices.find(v => v.lang.startsWith('ro'));
    if (roVoice) ttsUtterance.voice = roVoice;

    ttsUtterance.onboundary = (event) => {
        if (event.name === 'word') {
            ttsPosition += event.charIndex;
            const progress = (ttsPosition / ttsText.length) * 100;
            document.getElementById('ttsProgressBar').style.width = progress + '%';
        }
    };

    ttsUtterance.onend = () => {
        if (!ttsPaused) {
            stopTTS();
            showToast('✅ Citire finalizată', 'success');
        }
    };

    window.speechSynthesis.speak(ttsUtterance);
}

function pauseTTS() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        ttsPaused = true;
        updateTTSButtons();
        showToast('⏸️ Citire în pauză', 'info');
    }
}

function resumeTTS() {
    if (ttsPaused) {
        window.speechSynthesis.resume();
        ttsPaused = false;
        updateTTSButtons();
        showToast('▶️ Citire continuă', 'info');
    }
}

function stopTTS() {
    window.speechSynthesis.cancel();
    ttsActive = false;
    ttsPaused = false;
    ttsPosition = 0;
    updateTTSButtons();
    document.getElementById('ttsIndicator').classList.remove('active');
    document.getElementById('ttsProgressBar').style.width = '0%';
}

function updateTTSButtons() {
    const playBtn = document.getElementById('ttsPlayBtn');
    const pauseBtn = document.getElementById('ttsPauseBtn');
    const resumeBtn = document.getElementById('ttsResumeBtn');
    const stopBtn = document.getElementById('ttsStopBtn');

    if (ttsActive && !ttsPaused) {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'flex';
        resumeBtn.style.display = 'none';
        stopBtn.style.display = 'flex';
    } else if (ttsActive && ttsPaused) {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'none';
        resumeBtn.style.display = 'flex';
        stopBtn.style.display = 'flex';
    } else {
        playBtn.style.display = 'flex';
        pauseBtn.style.display = 'none';
        resumeBtn.style.display = 'none';
        stopBtn.style.display = 'none';
    }
}

// Load voices
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};

// ===============================
// DARK MODE
// ===============================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);

    const btn = document.getElementById('darkModeBtn');
    btn.querySelector('.toolbar-icon').textContent = isDark ? '☀️' : '🌙';
    btn.querySelector('.toolbar-label').textContent = isDark ? 'Luminos' : 'Temă';

    showToast(isDark ? '🌙 Mod întunecat activat' : '☀️ Mod luminos activat', 'info');
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('darkModeBtn');
    if (btn) {
        btn.querySelector('.toolbar-icon').textContent = '☀️';
        btn.querySelector('.toolbar-label').textContent = 'Luminos';
    }
}

// ===============================
// SEARCH FUNCTIONALITY
// ===============================
const searchableContent = [];

function indexContent() {
    document.querySelectorAll('.chapter-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent || '';
        const content = card.querySelector('.chapter-content')?.textContent || '';
        const chapter = card.dataset.chapter;
        searchableContent.push({
            title: title,
            content: content.substring(0, 200),
            chapter: chapter,
            element: card
        });
    });
}

function openSearch() {
    document.getElementById('searchModal').classList.add('active');
    document.getElementById('searchInput').focus();
    if (searchableContent.length === 0) indexContent();
}

function closeSearch() {
    document.getElementById('searchModal').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

function performSearch(event) {
    const query = event.target.value.toLowerCase();
    const results = document.getElementById('searchResults');

    if (query.length < 2) {
        results.innerHTML = '<p style="color: var(--gray-500);">Introdu cel puțin 2 caractere...</p>';
        return;
    }

    const matches = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        results.innerHTML = '<p style="color: var(--gray-500);">Nu s-au găsit rezultate.</p>';
        return;
    }

    results.innerHTML = matches.map(item => `
        <div class="search-result-item" onclick="goToResult('${item.chapter}')">
            <h4>📖 ${item.title}</h4>
            <p>${item.content.substring(0, 100)}...</p>
        </div>
    `).join('');
}

function goToResult(chapter) {
    closeSearch();
    const card = document.querySelector(`[data-chapter="${chapter}"]`);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.boxShadow = '0 0 30px rgba(249, 115, 22, 0.5)';
        setTimeout(() => card.style.boxShadow = '', 2000);
    }
}

// ===============================
// STATISTICS & PROGRESS
// ===============================
function getStats() {
    return JSON.parse(localStorage.getItem('learningStats')) || {
        testsCompleted: 0,
        scores: [],
        studyTime: 0,
        badges: [],
        lastVisit: null
    };
}

function saveStats(stats) {
    localStorage.setItem('learningStats', JSON.stringify(stats));
}

function recordTestResult(score, testType) {
    const stats = getStats();
    stats.testsCompleted++;
    stats.scores.push({ score, date: new Date().toISOString(), type: testType });

    // Check for badges
    if (stats.testsCompleted === 1 && !stats.badges.includes('first')) {
        stats.badges.push('first');
        showToast('🥉 Badge obținut: Primul Test!', 'success');
        playSound('correct');
    }
    if (stats.testsCompleted >= 5 && !stats.badges.includes('five')) {
        stats.badges.push('five');
        showToast('🥈 Badge obținut: 5 Teste Complete!', 'success');
        playSound('correct');
    }
    if (score >= 100 && !stats.badges.includes('perfect')) {
        stats.badges.push('perfect');
        showToast('🥇 Badge obținut: Scor Perfect!', 'success');
        playSound('correct');
    }

    saveStats(stats);
}

function openStats() {
    const stats = getStats();
    document.getElementById('statsModal').classList.add('active');

    // Update stats display
    document.getElementById('totalTests').textContent = stats.testsCompleted;

    const avgScore = stats.scores.length > 0
        ? Math.round(stats.scores.reduce((a, b) => a + b.score, 0) / stats.scores.length)
        : 0;
    document.getElementById('avgScore').textContent = avgScore + '%';

    document.getElementById('totalTime').textContent = Math.round(stats.studyTime / 60) + ' min';
    document.getElementById('badges').textContent = stats.badges.length;

    // Update chart
    renderScoreChart(stats.scores);

    // Update badges
    updateBadgesDisplay(stats.badges);
}

function closeStats() {
    document.getElementById('statsModal').classList.remove('active');
}

function renderScoreChart(scores) {
    const container = document.getElementById('scoreChart');
    const lastScores = scores.slice(-10);

    if (lastScores.length === 0) {
        container.innerHTML = '<p style="color: var(--gray-500); text-align: center;">Nu există date încă.</p>';
        return;
    }

    container.innerHTML = lastScores.map((s, i) =>
        `<div class="chart-bar" style="height: ${s.score}%" title="Test ${i + 1}: ${s.score}%"></div>`
    ).join('');
}

function updateBadgesDisplay(earnedBadges) {
    const badgeMap = {
        'first': 0,
        'five': 1,
        'perfect': 2,
        'welder': 3,
        'drawing': 4,
        'ssm': 5
    };

    const badges = document.querySelectorAll('#badgesGrid .badge');
    badges.forEach(badge => badge.classList.add('locked'));

    earnedBadges.forEach(b => {
        if (badgeMap[b] !== undefined) {
            badges[badgeMap[b]]?.classList.remove('locked');
        }
    });
}

function resetStats() {
    if (confirm('Sigur vrei să ștergi toate statisticile?')) {
        localStorage.removeItem('learningStats');
        showToast('🗑️ Statisticile au fost șterse', 'warning');
        closeStats();
    }
}

// ===============================
// FLASHCARDS
// ===============================
const flashcardsData = [
    { q: 'Ce înseamnă scara 2:1?', a: 'Scară de mărire', category: 'desen' },
    { q: 'Ce simbol reprezintă diametrul?', a: 'Ø', category: 'desen' },
    { q: 'Ce parametru de rugozitate este Ra?', a: 'Abaterea medie aritmetică', category: 'desen' },
    { q: 'Ce simbolizează triunghiul △?', a: 'Sudură în colț', category: 'desen' },
    { q: 'Ce standard reglementează simbolurile de sudură?', a: 'ISO 2553', category: 'desen' },
    { q: 'Ce gaz se folosește la sudarea TIG?', a: 'Argon pur', category: 'sudura' },
    { q: 'Care procedeu folosește electrod învelit?', a: 'MMA/SMAW', category: 'sudura' },
    { q: 'Formula curentului de sudare?', a: 'I = (30-40) × d', category: 'sudura' },
    { q: 'Ce defect apare la răcire rapidă?', a: 'Fisuri', category: 'sudura' },
    { q: 'Ce este controlul VT?', a: 'Control vizual', category: 'sudura' },
    { q: 'Legea principală SSM?', a: 'Legea 319/2006', category: 'ssm' },
    { q: 'Filtru mască sudură DIN?', a: 'DIN 9-13', category: 'ssm' },
    { q: 'Tensiunea în gol la sudare?', a: '60-90V', category: 'ssm' },
    { q: 'Cât timp se supraveghează după sudare?', a: '30 minute', category: 'ssm' },
    { q: 'Ce tip de stingător pentru sudură?', a: 'CO2 sau pulbere', category: 'ssm' }
];

let currentFlashcards = [...flashcardsData];
let currentFlashcardIndex = 0;

function openFlashcards() {
    document.getElementById('flashcardsModal').classList.add('active');
    showFlashcard();
}

function closeFlashcards() {
    document.getElementById('flashcardsModal').classList.remove('active');
    document.getElementById('currentFlashcard').classList.remove('flipped');
}

function showFlashcard() {
    const card = currentFlashcards[currentFlashcardIndex];
    document.getElementById('flashcardQuestion').textContent = card.q;
    document.getElementById('flashcardAnswer').textContent = card.a;
    document.getElementById('flashcardCounter').textContent =
        `${currentFlashcardIndex + 1}/${currentFlashcards.length}`;
    document.getElementById('currentFlashcard').classList.remove('flipped');
}

function flipFlashcard() {
    document.getElementById('currentFlashcard').classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcards.length;
    showFlashcard();
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcards.length) % currentFlashcards.length;
    showFlashcard();
}

function setFlashcardCategory(category) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    currentFlashcards = category === 'all'
        ? [...flashcardsData]
        : flashcardsData.filter(f => f.category === category);
    currentFlashcardIndex = 0;
    showFlashcard();
}

// ===============================
// NOTES SYSTEM
// ===============================
function toggleNotes() {
    document.getElementById('notesPanel').classList.toggle('active');
    loadNote();
}

function closeNotes() {
    document.getElementById('notesPanel').classList.remove('active');
}

function loadNote() {
    const chapter = document.getElementById('noteChapter').value;
    const notes = JSON.parse(localStorage.getItem('userNotes')) || {};
    document.getElementById('noteContent').value = notes[chapter] || '';
}

function saveNote() {
    const chapter = document.getElementById('noteChapter').value;
    const content = document.getElementById('noteContent').value;
    const notes = JSON.parse(localStorage.getItem('userNotes')) || {};
    notes[chapter] = content;
    localStorage.setItem('userNotes', JSON.stringify(notes));
    showToast('💾 Notiță salvată!', 'success');
}

// ===============================
// TOAST NOTIFICATIONS
// ===============================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

// ===============================
// SOUND EFFECTS
// ===============================
function playSound(type) {
    const sound = document.getElementById(type === 'correct' ? 'correctSound' : 'incorrectSound');
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => { });
    }
}

// ===============================
// ENHANCED TEST SUBMISSION
// ===============================
const originalSubmitTest = submitTest;
submitTest = function () {
    // Calculate score
    let correctCount = 0;
    testQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
            playSound('correct');
        }
    });

    const percentage = Math.round((correctCount / testQuestions.length) * 100);

    // Record for stats
    recordTestResult(percentage, currentTest);

    // Call original function
    originalSubmitTest();
};

// ===============================
// STUDY TIME TRACKING
// ===============================
let studyStartTime = Date.now();

window.addEventListener('beforeunload', () => {
    const stats = getStats();
    stats.studyTime += Math.round((Date.now() - studyStartTime) / 1000);
    stats.lastVisit = new Date().toISOString();
    saveStats(stats);
});

// ===============================
// KEYBOARD SHORTCUTS
// ===============================
document.addEventListener('keydown', (e) => {
    // Escape to close modals
    if (e.key === 'Escape') {
        closeSearch();
        closeStats();
        closeFlashcards();
        closeNotes();
    }

    // Ctrl+K for search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }

    // D for dark mode
    if (e.key === 'd' && !e.ctrlKey && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        toggleDarkMode();
    }
});

// ===============================
// INITIALIZE
// ===============================
console.log('✅ Toate funcționalitățile interactive au fost încărcate!');
console.log('📊 Statistici, 🎯 Flashcards, 🔍 Căutare, 🌙 Mod întunecat, 📝 Notițe');
console.log('🔊 Citire vocală cu Pauză/Continuare disponibilă');

// ===============================
// 🎮 GAMIFICATION SYSTEM
// ===============================

// XP and Level System
const LEVEL_CONFIG = {
    levels: [
        { name: '🌱 Începător', minXP: 0, color: '#10b981' },
        { name: '🔧 Ucenic', minXP: 100, color: '#3b82f6' },
        { name: '⚡ Sudor', minXP: 300, color: '#8b5cf6' },
        { name: '🔥 Expert', minXP: 600, color: '#f97316' },
        { name: '👑 Maestru', minXP: 1000, color: '#eab308' }
    ],
    xpPerCorrectAnswer: 10,
    xpPerTestComplete: 50,
    xpPerChapterRead: 20,
    xpPerFlashcard: 5
};

function getPlayerData() {
    const data = localStorage.getItem('playerData');
    return data ? JSON.parse(data) : {
        xp: 0,
        level: 0,
        chaptersRead: [],
        bookmarks: [],
        achievements: [],
        dailyStreak: 0,
        lastPlayDate: null
    };
}

function savePlayerData(data) {
    localStorage.setItem('playerData', JSON.stringify(data));
}

function addXP(amount, reason = '') {
    const data = getPlayerData();
    const oldLevel = getCurrentLevel(data.xp);
    data.xp += amount;
    const newLevel = getCurrentLevel(data.xp);
    savePlayerData(data);

    // Show XP notification
    showXPNotification(amount, reason);

    // Level up celebration
    if (newLevel.name !== oldLevel.name) {
        celebrateLevelUp(newLevel);
    }

    updateProgressDashboard();
}

function getCurrentLevel(xp) {
    let currentLevel = LEVEL_CONFIG.levels[0];
    for (const level of LEVEL_CONFIG.levels) {
        if (xp >= level.minXP) {
            currentLevel = level;
        }
    }
    return currentLevel;
}

function getNextLevel(xp) {
    for (const level of LEVEL_CONFIG.levels) {
        if (xp < level.minXP) {
            return level;
        }
    }
    return null;
}

function showXPNotification(amount, reason) {
    const notification = document.createElement('div');
    notification.className = 'xp-notification';
    notification.innerHTML = `+${amount} XP ${reason ? `<span class="xp-reason">${reason}</span>` : ''}`;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===============================
// 🎊 CONFETTI SYSTEM
// ===============================
function createConfetti() {
    const colors = ['#3b82f6', '#10b981', '#f97316', '#eab308', '#ef4444', '#8b5cf6'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 20);
    }
}

function celebrateLevelUp(level) {
    createConfetti();
    playSound('badge');

    const modal = document.createElement('div');
    modal.className = 'level-up-modal';
    modal.innerHTML = `
        <div class="level-up-content">
            <div class="level-up-icon">🎉</div>
            <h2>NIVEL NOU!</h2>
            <h3 style="color: ${level.color}">${level.name}</h3>
            <p>Felicitări! Ai avansat la un nou nivel!</p>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">Continuă</button>
        </div>
    `;
    document.body.appendChild(modal);

    setTimeout(() => modal.classList.add('show'), 10);
}

function celebrateTestComplete(score) {
    if (score >= 70) {
        createConfetti();
        playSound('badge');
    }
}

// ===============================
// 📊 PROGRESS DASHBOARD
// ===============================
function openDashboard() {
    const data = getPlayerData();
    const stats = getStats();
    const level = getCurrentLevel(data.xp);
    const nextLevel = getNextLevel(data.xp);
    const progress = nextLevel ? ((data.xp - level.minXP) / (nextLevel.minXP - level.minXP)) * 100 : 100;

    const modal = document.createElement('div');
    modal.className = 'dashboard-modal';
    modal.id = 'dashboardModal';
    modal.innerHTML = `
        <div class="dashboard-content">
            <div class="dashboard-header">
                <h2>📊 Progresul Meu</h2>
                <button class="close-btn" onclick="closeDashboard()">×</button>
            </div>
            <div class="dashboard-body">
                <div class="level-card" style="border-color: ${level.color}">
                    <div class="level-icon">${level.name.split(' ')[0]}</div>
                    <div class="level-info">
                        <h3>${level.name}</h3>
                        <div class="xp-bar">
                            <div class="xp-fill" style="width: ${progress}%; background: ${level.color}"></div>
                        </div>
                        <p>${data.xp} XP ${nextLevel ? `/ ${nextLevel.minXP} XP` : '(MAX)'}</p>
                    </div>
                </div>
                
                <div class="stats-quick">
                    <div class="stat-item">
                        <span class="stat-icon">📝</span>
                        <span class="stat-value">${stats.testsCompleted}</span>
                        <span class="stat-label">Teste</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">🎯</span>
                        <span class="stat-value">${stats.averageScore}%</span>
                        <span class="stat-label">Medie</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">⏱️</span>
                        <span class="stat-value">${Math.round(stats.studyTime / 60)}</span>
                        <span class="stat-label">Minute</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">🔖</span>
                        <span class="stat-value">${data.bookmarks.length}</span>
                        <span class="stat-label">Marcaje</span>
                    </div>
                </div>
                
                <div class="daily-challenge">
                    <h4>🎯 Provocare Zilnică</h4>
                    <p>Completează un test cu scor peste 80%</p>
                    <div class="challenge-reward">🎁 +50 XP Bonus</div>
                </div>
                
                <div class="achievements-preview">
                    <h4>🏆 Realizări Recente</h4>
                    <div class="achievements-row">
                        ${renderAchievementMini(stats)}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeDashboard() {
    const modal = document.getElementById('dashboardModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

function renderAchievementMini(stats) {
    const achievements = [];
    if (stats.testsCompleted >= 1) achievements.push('🥇');
    if (stats.testsCompleted >= 5) achievements.push('🏅');
    if (stats.averageScore >= 90) achievements.push('⭐');
    if (stats.studyTime >= 1800) achievements.push('📚');

    if (achievements.length === 0) {
        return '<span class="no-achievements">Completează teste pentru a debloca realizări!</span>';
    }
    return achievements.map(a => `<span class="achievement-mini">${a}</span>`).join('');
}

function updateProgressDashboard() {
    // Update floating progress indicator if exists
    const indicator = document.getElementById('progressIndicator');
    if (indicator) {
        const data = getPlayerData();
        const level = getCurrentLevel(data.xp);
        indicator.innerHTML = `${level.name.split(' ')[0]} ${data.xp} XP`;
    }
}

// ===============================
// 🔖 BOOKMARKS SYSTEM
// ===============================
function toggleBookmark(chapterId) {
    const data = getPlayerData();
    const index = data.bookmarks.indexOf(chapterId);

    if (index === -1) {
        data.bookmarks.push(chapterId);
        showToast('Marcaj adăugat! 🔖', 'success');
    } else {
        data.bookmarks.splice(index, 1);
        showToast('Marcaj eliminat', 'info');
    }

    savePlayerData(data);
    updateBookmarkButtons();
}

function isBookmarked(chapterId) {
    const data = getPlayerData();
    return data.bookmarks.includes(chapterId);
}

function updateBookmarkButtons() {
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const chapterId = btn.dataset.chapter;
        if (isBookmarked(chapterId)) {
            btn.classList.add('active');
            btn.innerHTML = '🔖';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '📑';
        }
    });
}

// ===============================
// 🌈 THEME SYSTEM
// ===============================
const THEMES = {
    default: { primary: '#3b82f6', accent: '#10b981', name: '💙 Albastru' },
    purple: { primary: '#8b5cf6', accent: '#ec4899', name: '💜 Violet' },
    orange: { primary: '#f97316', accent: '#eab308', name: '🧡 Portocaliu' },
    green: { primary: '#10b981', accent: '#14b8a6', name: '💚 Verde' },
    red: { primary: '#ef4444', accent: '#f97316', name: '❤️ Roșu' }
};

function setTheme(themeName) {
    const theme = THEMES[themeName] || THEMES.default;
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--accent', theme.accent);
    localStorage.setItem('selectedTheme', themeName);
    showToast(`Temă schimbată: ${theme.name}`, 'success');
}

function openThemeSelector() {
    const modal = document.createElement('div');
    modal.className = 'theme-modal';
    modal.id = 'themeModal';
    modal.innerHTML = `
        <div class="theme-content">
            <h3>🌈 Alege Tema</h3>
            <div class="theme-grid">
                ${Object.entries(THEMES).map(([key, theme]) => `
                    <button class="theme-btn" onclick="setTheme('${key}'); closeThemeModal();" 
                            style="background: linear-gradient(135deg, ${theme.primary}, ${theme.accent})">
                        ${theme.name}
                    </button>
                `).join('')}
            </div>
            <button class="btn" onclick="closeThemeModal()">Închide</button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeThemeModal() {
    const modal = document.getElementById('themeModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Initialize theme
const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme) setTheme(savedTheme);

// ===============================
// 🎯 ENHANCED TEST COMPLETION
// ===============================
const gamifiedSubmitTest = submitTest;
submitTest = function () {
    const result = gamifiedSubmitTest();

    // Calculate score
    let correctCount = 0;
    testQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / testQuestions.length) * 100);

    // Add XP
    const xpEarned = (correctCount * LEVEL_CONFIG.xpPerCorrectAnswer) + LEVEL_CONFIG.xpPerTestComplete;
    addXP(xpEarned, `Test ${currentTest}`);

    // Celebrate
    celebrateTestComplete(percentage);

    // Daily challenge check
    if (percentage >= 80) {
        const data = getPlayerData();
        const today = new Date().toDateString();
        if (data.lastPlayDate !== today) {
            addXP(50, 'Provocare zilnică!');
            data.lastPlayDate = today;
            savePlayerData(data);
        }
    }
};

// ===============================
// 🎮 INITIALIZE GAMIFICATION
// ===============================
function initGamification() {
    // Add progress indicator to toolbar
    const toolbar = document.querySelector('.floating-toolbar');
    if (toolbar) {
        const progressBtn = document.createElement('button');
        progressBtn.className = 'toolbar-btn';
        progressBtn.id = 'progressIndicator';
        progressBtn.onclick = openDashboard;
        const data = getPlayerData();
        const level = getCurrentLevel(data.xp);
        progressBtn.innerHTML = `
            <span class="toolbar-icon">${level.name.split(' ')[0]}</span>
            <span class="toolbar-label">${data.xp} XP</span>
        `;
        toolbar.insertBefore(progressBtn, toolbar.firstChild);

        // Add theme button
        const themeBtn = document.createElement('button');
        themeBtn.className = 'toolbar-btn';
        themeBtn.onclick = openThemeSelector;
        themeBtn.innerHTML = `
            <span class="toolbar-icon">🌈</span>
            <span class="toolbar-label">Temă</span>
        `;
        toolbar.appendChild(themeBtn);
    }

    // Add bookmark buttons to chapters
    document.querySelectorAll('.chapter-card').forEach(card => {
        const chapterId = card.dataset.chapter;
        if (chapterId) {
            const bookmarkBtn = document.createElement('button');
            bookmarkBtn.className = 'bookmark-btn';
            bookmarkBtn.dataset.chapter = chapterId;
            bookmarkBtn.onclick = (e) => {
                e.stopPropagation();
                toggleBookmark(chapterId);
            };
            bookmarkBtn.innerHTML = isBookmarked(chapterId) ? '🔖' : '📑';
            if (isBookmarked(chapterId)) bookmarkBtn.classList.add('active');
            card.querySelector('.chapter-header').appendChild(bookmarkBtn);
        }
    });

    // Track chapter reading
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chapterId = entry.target.dataset.chapter;
                const data = getPlayerData();
                if (chapterId && !data.chaptersRead.includes(chapterId)) {
                    data.chaptersRead.push(chapterId);
                    savePlayerData(data);
                    addXP(LEVEL_CONFIG.xpPerChapterRead, 'Capitol citit');
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.chapter-card').forEach(card => {
        observer.observe(card);
    });
}

// Run initialization
document.addEventListener('DOMContentLoaded', initGamification);
if (document.readyState !== 'loading') {
    initGamification();
}

console.log('🎮 Sistem de gamificare activat!');

// ===============================
// 📱 PWA SERVICE WORKER
// ===============================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('✅ Service Worker înregistrat:', reg.scope))
            .catch(err => console.log('❌ Eroare Service Worker:', err));
    });
}

// ===============================
// PDF EXPORT
// ===============================
function exportPDF() {
    const element = document.getElementById('testResults');
    const opt = {
        margin: 0.5,
        filename: 'Diploma_Prelucrari_Cald.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Temporarily hide buttons for export
    const buttons = element.querySelector('.results-actions');
    const originalDisplay = buttons ? buttons.style.display : '';
    if (buttons) buttons.style.display = 'none';

    html2pdf().set(opt).from(element).save().then(() => {
        // Restore buttons
        if (buttons) buttons.style.display = originalDisplay;
        // showToast function should be available
        if (typeof showToast === 'function') {
            showToast('PDF exportat cu succes! 📄', 'success');
        } else {
            alert('PDF exportat cu succes!');
        }
    }).catch(err => {
        console.error(err);
        if (buttons) buttons.style.display = originalDisplay;
        alert('Eroare la exportul PDF. Încearcă din nou.');
    });
}
