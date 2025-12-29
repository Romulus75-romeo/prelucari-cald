// ===============================
// ÎMBUNĂTĂȚIRI PLATFORMĂ - 2025
// JavaScript pentru funcționalități noi
// ===============================

// ================================
// 1. SWIPE GESTURES PENTRU NAVIGARE
// ================================
class SwipeNavigator {
    constructor() {
        this.startX = 0;
        this.startY = 0;
        this.distX = 0;
        this.distY = 0;
        this.threshold = 100; // minimum distance for swipe
        this.sections = ['acasa', 'desen-tehnic', 'imbinari-sudate', 'protectia-muncii', 'fise-lucru', 'joc-interactiv', 'teste'];
        this.init();
    }

    init() {
        document.addEventListener('touchstart', (e) => this.handleTouchStart(e), {passive: false});
        document.addEventListener('touchmove', (e) => this.handleTouchMove(e), {passive: false});
        document.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: false});
    }

    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
    }

    handleTouchMove(e) {
        if (!this.startX || !this.startY) return;
        
        this.distX = e.touches[0].clientX - this.startX;
        this.distY = e.touches[0].clientY - this.startY;
    }

    handleTouchEnd(e) {
        // Only proceed if swipe is mostly horizontal
        if (Math.abs(this.distX) < Math.abs(this.distY)) {
            this.reset();
            return;
        }

        if (Math.abs(this.distX) < this.threshold) {
            this.reset();
            return;
        }

        // Determine current section
        const currentSection = this.getCurrentSection();
        const currentIndex = this.sections.indexOf(currentSection);

        // Swipe left -> next section
        if (this.distX < 0 && currentIndex < this.sections.length - 1) {
            this.navigateToSection(this.sections[currentIndex + 1], 'right');
        }
        // Swipe right -> previous section
        else if (this.distX > 0 && currentIndex > 0) {
            this.navigateToSection(this.sections[currentIndex - 1], 'left');
        }

        this.reset();
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('.content-section, .hero');
        let current = 'acasa';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
                current = section.id || 'acasa';
            }
        });
        
        return current;
    }

    navigateToSection(sectionId, direction) {
        // Show swipe indicator
        this.showSwipeIndicator(direction);
        
        // Navigate after brief delay
        setTimeout(() => {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 200);
    }

    showSwipeIndicator(direction) {
        const indicator = document.createElement('div');
        indicator.className = `swipe-indicator ${direction}`;
        indicator.textContent = direction === 'right' ? '→' : '←';
        document.body.appendChild(indicator);
        
        setTimeout(() => indicator.classList.add('show'), 10);
        setTimeout(() => {
            indicator.classList.remove('show');
            setTimeout(() => indicator.remove(), 300);
        }, 500);
    }

    reset() {
        this.startX = 0;
        this.startY = 0;
        this.distX = 0;
        this.distY = 0;
    }
}

// ================================
// 2. AUTO-HIDE TOOLBAR LA SCROLL
// ================================
class ToolbarAutoHide {
    constructor() {
        this.lastScroll = 0;
        this.toolbar = document.getElementById('floatingToolbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 100) {
            this.toolbar?.classList.remove('hide-on-scroll');
            this.toolbar?.classList.add('show');
            return;
        }

        if (currentScroll > this.lastScroll && currentScroll > 200) {
            // Scrolling down - hide toolbar
            this.toolbar?.classList.add('hide-on-scroll');
        } else {
            // Scrolling up - show toolbar
            this.toolbar?.classList.remove('hide-on-scroll');
            this.toolbar?.classList.add('show');
        }

        this.lastScroll = currentScroll;
    }
}

// ================================
// 3. SCROLL-TO-TOP BUTTON
// ================================
class ScrollToTop {
    constructor() {
        this.button = null;
        this.init();
    }

    init() {
        // Create button
        this.button = document.createElement('button');
        this.button.className = 'scroll-to-top';
        this.button.innerHTML = '↑';
        this.button.setAttribute('aria-label', 'Înapoi sus');
        this.button.addEventListener('click', () => this.scrollToTop());
        document.body.appendChild(this.button);

        // Show/hide based on scroll
        window.addEventListener('scroll', () => this.toggleVisibility());
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ================================
// 4. TABLE OF CONTENTS (TOC)
// ================================
class TableOfContents {
    constructor() {
        this.toc = null;
        this.tocList = null;
        this.toggle = null;
        this.init();
    }

    init() {
        this.createTOC();
        this.populateTOC();
        this.createToggleButton();
        this.setupScrollSpy();
    }

    createTOC() {
        this.toc = document.createElement('div');
        this.toc.className = 'table-of-contents';
        this.toc.innerHTML = `
            <div class="toc-header">Cuprins</div>
            <ul class="toc-list" id="tocList"></ul>
        `;
        document.body.appendChild(this.toc);
        this.tocList = document.getElementById('tocList');
    }

    populateTOC() {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            const title = section.querySelector('.section-header h2')?.textContent;
            const id = section.id;
            
            if (title && id) {
                const li = document.createElement('li');
                li.className = 'toc-item';
                li.innerHTML = `<a href="#${id}" class="toc-link">${title}</a>`;
                this.tocList.appendChild(li);
            }
        });

        // Add click handlers
        this.tocList.querySelectorAll('.toc-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    createToggleButton() {
        this.toggle = document.createElement('button');
        this.toggle.className = 'toc-toggle';
        this.toggle.innerHTML = '☰';
        this.toggle.setAttribute('aria-label', 'Cuprins');
        this.toggle.addEventListener('click', () => this.toggleTOC());
        document.body.appendChild(this.toggle);
    }

    toggleTOC() {
        this.toc.classList.toggle('visible');
    }

    setupScrollSpy() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.content-section');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            this.tocList.querySelectorAll('.toc-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// ================================
// 5. READING PROGRESS BAR
// ================================
class ReadingProgress {
    constructor() {
        this.progressBar = null;
        this.init();
    }

    init() {
        // Create progress bar
        const container = document.createElement('div');
        container.className = 'reading-progress';
        container.innerHTML = '<div class="reading-progress-bar"></div>';
        document.body.appendChild(container);
        
        this.progressBar = container.querySelector('.reading-progress-bar');

        // Update on scroll
        window.addEventListener('scroll', () => this.updateProgress());
    }

    updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        this.progressBar.style.width = scrolled + '%';

        // Show progress bar only when scrolling
        const container = this.progressBar.parentElement;
        if (winScroll > 100) {
            container.classList.add('visible');
        } else {
            container.classList.remove('visible');
        }
    }
}

// ================================
// 6. DIFFICULTY LEVELS FOR GAME
// ================================
class DifficultyManager {
    constructor() {
        this.currentDifficulty = 'medium';
        this.difficulties = {
            easy: { pairs: 4, time: 180000 },    // 3 min
            medium: { pairs: 6, time: 120000 },  // 2 min
            hard: { pairs: 8, time: 90000 }      // 1.5 min
        };
    }

    addDifficultySelector(container) {
        const selector = document.createElement('div');
        selector.className = 'difficulty-selector';
        selector.innerHTML = `
            <button class="difficulty-btn easy active" data-difficulty="easy">Ușor</button>
            <button class="difficulty-btn medium" data-difficulty="medium">Mediu</button>
            <button class="difficulty-btn hard" data-difficulty="hard">Dificil</button>
        `;
        
        container.insertBefore(selector, container.firstChild);

        // Add click handlers
        selector.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', () => this.setDifficulty(btn.dataset.difficulty, selector));
        });
    }

    setDifficulty(level, container) {
        this.currentDifficulty = level;
        container.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        container.querySelector(`[data-difficulty="${level}"]`).classList.add('active');
        
        // Restart game with new difficulty
        if (typeof resetGame === 'function') {
            resetGame();
        }
    }

    getDifficultySettings() {
        return this.difficulties[this.currentDifficulty];
    }
}

// ================================
// 7. SOUND EFFECTS
// ================================
class SoundManager {
    constructor() {
        this.sounds = {
            correct: null,
            incorrect: null,
            success: null
        };
        this.init();
    }

    init() {
        // Get existing sound elements
        this.sounds.correct = document.getElementById('correctSound');
        this.sounds.incorrect = document.getElementById('incorrectSound');
    }

    play(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Sound play failed:', e));
        }
    }
}

// ================================
// 8. CONFETTI ANIMATION
// ================================
class ConfettiManager {
    createConfetti(count = 50) {
        const colors = ['#2563eb', '#f97316', '#eab308', '#22c55e', '#8b5cf6'];
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-particle';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                confetti.style.animationDelay = (Math.random() * 0.5) + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 4000);
            }, i * 30);
        }
    }
}

// ================================
// 9. LOCAL LEADERBOARD
// ================================
class Leaderboard {
    constructor() {
        this.scores = this.loadScores();
    }

    loadScores() {
        const saved = localStorage.getItem('gameLeaderboard');
        return saved ? JSON.parse(saved) : [];
    }

    saveScores() {
        localStorage.setItem('gameLeaderboard', JSON.stringify(this.scores));
    }

    addScore(score, name = 'Anonim') {
        this.scores.push({
            name: name,
            score: score,
            date: new Date().toISOString()
        });
        
        // Keep only top 10
        this.scores.sort((a, b) => b.score - a.score);
        this.scores = this.scores.slice(0, 10);
        this.saveScores();
    }

    getTopScores(limit = 10) {
        return this.scores.slice(0, limit);
    }

    renderLeaderboard(container) {
        const leaderboardHTML = `
            <div class="leaderboard-container">
                <div class="leaderboard-header">
                    <span class="leaderboard-icon">🏆</span>
                    <h3 class="leaderboard-title">Top Scoruri</h3>
                </div>
                <ul class="leaderboard-list">
                    ${this.scores.map((entry, index) => `
                        <li class="leaderboard-entry ${index === 0 ? 'current-user' : ''}">
                            <span class="leaderboard-rank ${this.getRankClass(index)}">${index + 1}</span>
                            <span class="leaderboard-name">${entry.name}</span>
                            <span class="leaderboard-score">${entry.score}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        container.innerHTML = leaderboardHTML;
    }

    getRankClass(index) {
        if (index === 0) return 'gold';
        if (index === 1) return 'silver';
        if (index === 2) return 'bronze';
        return '';
    }
}

// ================================
// 10. BREADCRUMBS NAVIGATION
// ================================
class BreadcrumbsManager {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateBreadcrumbs());
    }

    updateBreadcrumbs() {
        const sections = document.querySelectorAll('.content-section');
        let currentSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
                currentSection = section;
            }
        });

        if (currentSection) {
            this.renderBreadcrumbs(currentSection);
        }
    }

    renderBreadcrumbs(section) {
        let breadcrumbsContainer = document.querySelector('.breadcrumbs');
        if (!breadcrumbsContainer) {
            breadcrumbsContainer = document.createElement('div');
            breadcrumbsContainer.className = 'breadcrumbs';
            section.querySelector('.container')?.insertBefore(
                breadcrumbsContainer,
                section.querySelector('.section-header')
            );
        }

        const title = section.querySelector('.section-header h2')?.textContent;
        breadcrumbsContainer.innerHTML = `
            <div class="breadcrumb-item">
                <a href="#acasa" class="breadcrumb-link">Acasă</a>
                <span class="breadcrumb-separator">›</span>
            </div>
            <div class="breadcrumb-item">
                <span class="breadcrumb-current">${title || 'Secțiune'}</span>
            </div>
        `;
    }
}

// ================================
// 11. SKIP LINKS FOR ACCESSIBILITY
// ================================
class SkipLinks {
    constructor() {
        this.init();
    }

    init() {
        const skipLinks = document.createElement('div');
        skipLinks.className = 'skip-links';
        skipLinks.setAttribute('role', 'navigation');
        skipLinks.setAttribute('aria-label', 'Collegamenti rapidi');
        skipLinks.innerHTML = `
            <a href="#desen-tehnic" class="skip-link">Sari la conținut principal</a>
            <a href="#teste" class="skip-link">Sari la teste</a>
            <a href="#floatingToolbar" class="skip-link">Sari la bară de instrumente</a>
        `;
        document.body.insertBefore(skipLinks, document.body.firstChild);
    }
}

// ================================
// 12. SEARCH WITH SUGGESTIONS
// ================================
class SearchEnhanced {
    constructor() {
        this.searchInput = null;
        this.suggestionsContainer = null;
        this.searchableContent = [];
        this.init();
    }

    init() {
        this.indexContent();
        this.setupSearchListener();
    }

    indexContent() {
        // Index all chapter contents for search
        const chapters = document.querySelectorAll('.chapter-card');
        chapters.forEach(chapter => {
            const title = chapter.querySelector('h3')?.textContent || '';
            const content = chapter.textContent || '';
            const chapterId = chapter.dataset.chapter;
            
            this.searchableContent.push({
                title,
                content,
                id: chapterId,
                element: chapter
            });
        });
    }

    setupSearchListener() {
        // Enhanced search will be integrated with existing search modal
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            this.searchInput = searchInput;
            this.createSuggestionsContainer();
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }
    }

    createSuggestionsContainer() {
        if (!this.suggestionsContainer) {
            this.suggestionsContainer = document.createElement('div');
            this.suggestionsContainer.className = 'search-suggestions';
            this.searchInput.parentElement.appendChild(this.suggestionsContainer);
        }
    }

    handleSearch(query) {
        if (query.length < 2) {
            this.suggestionsContainer.innerHTML = '';
            return;
        }

        const results = this.searchableContent.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.content.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);

        this.renderSuggestions(results, query);
    }

    renderSuggestions(results, query) {
        if (results.length === 0) {
            this.suggestionsContainer.innerHTML = '<div class="suggestion-item">Nu s-au găsit rezultate</div>';
            return;
        }

        const html = results.map(result => {
            const highlightedTitle = this.highlightMatch(result.title, query);
            return `
                <div class="suggestion-item" data-chapter="${result.id}">
                    <strong>${highlightedTitle}</strong>
                </div>
            `;
        }).join('');

        this.suggestionsContainer.innerHTML = html;

        // Add click handlers
        this.suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const chapterId = item.dataset.chapter;
                const chapter = document.querySelector(`[data-chapter="${chapterId}"]`);
                if (chapter) {
                    chapter.scrollIntoView({ behavior: 'smooth' });
                    closeSearch();
                }
            });
        });
    }

    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }
}

// ================================
// 13. BOOKMARKS SYSTEM
// ================================
class BookmarksManager {
    constructor() {
        this.bookmarks = this.loadBookmarks();
        this.init();
    }

    loadBookmarks() {
        const saved = localStorage.getItem('userBookmarks');
        return saved ? JSON.parse(saved) : [];
    }

    saveBookmarks() {
        localStorage.setItem('userBookmarks', JSON.stringify(this.bookmarks));
    }

    init() {
        // Add bookmark buttons to chapters
        document.querySelectorAll('.chapter-card').forEach(chapter => {
            const btn = document.createElement('button');
            btn.className = 'bookmark-btn';
            btn.innerHTML = this.isBookmarked(chapter.dataset.chapter) ? '★' : '☆';
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleBookmark(chapter.dataset.chapter, btn);
            });
            chapter.querySelector('.chapter-header').appendChild(btn);
        });
    }

    isBookmarked(chapterId) {
        return this.bookmarks.includes(chapterId);
    }

    toggleBookmark(chapterId, btn) {
        const index = this.bookmarks.indexOf(chapterId);
        if (index > -1) {
            this.bookmarks.splice(index, 1);
            btn.innerHTML = '☆';
            btn.classList.remove('active');
        } else {
            this.bookmarks.push(chapterId);
            btn.innerHTML = '★';
            btn.classList.add('active');
        }
        this.saveBookmarks();
    }

    getBookmarkedChapters() {
        return this.bookmarks;
    }
}

// ================================
// 14. TEST REVIEW SYSTEM
// ================================
class TestReviewManager {
    constructor() {
        this.incorrectAnswers = [];
    }

    addIncorrectAnswer(questionIndex, question, userAnswer, correctAnswer) {
        this.incorrectAnswers.push({
            questionIndex,
            question,
            userAnswer,
            correctAnswer,
            explanation: this.getExplanation(questionIndex)
        });
    }

    getExplanation(questionIndex) {
        // Explanations could be stored separately
        return "Răspunsul corect este important pentru înțelegerea conceptului.";
    }

    renderReviewSection() {
        if (this.incorrectAnswers.length === 0) {
            return '';
        }

        return `
            <div class="review-section">
                <div class="review-header">
                    <span class="review-icon">📝</span>
                    <h4 class="review-title">Întrebări pentru revizuit (${this.incorrectAnswers.length})</h4>
                </div>
                ${this.incorrectAnswers.map((item, index) => `
                    <div class="review-question">
                        <strong>Întrebarea ${item.questionIndex + 1}:</strong> ${item.question}
                        <div class="answer-explanation incorrect">
                            <div class="explanation-title">
                                <span>❌</span> Răspunsul tău: ${item.userAnswer}
                            </div>
                        </div>
                        <div class="answer-explanation correct">
                            <div class="explanation-title">
                                <span>✅</span> Răspuns corect: ${item.correctAnswer}
                            </div>
                            <p>${item.explanation}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    reset() {
        this.incorrectAnswers = [];
    }
}

// ================================
// INITIALIZE ALL ENHANCEMENTS
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if we're on the main page
    if (document.getElementById('floatingToolbar')) {
        // Mobile enhancements
        const swipeNav = new SwipeNavigator();
        const toolbarAutoHide = new ToolbarAutoHide();
        
        // Navigation enhancements
        const scrollToTop = new ScrollToTop();
        const toc = new TableOfContents();
        const readingProgress = new ReadingProgress();
        
        // Accessibility
        const skipLinks = new SkipLinks();
        
        // Game enhancements
        window.difficultyManager = new DifficultyManager();
        window.soundManager = new SoundManager();
        window.confettiManager = new ConfettiManager();
        window.leaderboard = new Leaderboard();
        
        // Interactive features
        const searchEnhanced = new SearchEnhanced();
        const bookmarksManager = new BookmarksManager();
        window.testReviewManager = new TestReviewManager();
        
        // Add difficulty selector to game if game section exists
        const gameContainer = document.querySelector('#joc-interactiv .container');
        if (gameContainer && window.difficultyManager) {
            window.difficultyManager.addDifficultySelector(gameContainer);
        }
        
        console.log('✅ Toate îmbunătățirile au fost inițializate cu succes!');
    }
});

// Export for global access
window.EnhancementsLoaded = true;
