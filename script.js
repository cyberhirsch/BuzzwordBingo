document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('bingo-board');
    const resetButton = document.getElementById('reset-button');
    const gridSize = 5; // 5x5 Grid
    let cells = [];
    let bingoAchieved = false;

    // --- Buzzwords & Anglizismen für Medieninformatik ---
    // Wähle mehr als 25 aus, damit jedes Spiel anders ist
    const buzzwordsPool = [
        "KI", "Machine Learning", "Deep Learning", "Generative AI", "Prompt Engineering", "Vibe Coding", "Storyboarding",
        "LLM", "Cloud Native", "Edge Computing", "Big Data", "Data Science", "Synergieeffekte", "Reputation System",
        "UX Design", "UI Engineering", "Interaction Design", "Agile", "Scrum", "Disruptiv", "User Agency",
        "DevOps", "Microservices", "API First", "WebAssembly", "PWA","Game Engine", "Extrameile gehen", "Soft Skills",
        "SPA", "React", "Cybersecurity", "Blockchain", "NFT", "Wertschöpfungskette", "Transformation", "Worldbuilding",
        "Metaverse", "AR", "Digital Twin", "VR", "Low-Code", "No-Code", "Gamification", "Content", "Gatekeeping",
        "Sustainable IT", "Accessibility", "Responsive Design", "Containerization", "Docker", "Storytelling",
        "IoT", "HCI", "NLP", "Computer Vision", "Headless CMS", "Persona", "Stakeholder", "Experience",
        "Serverless", "Full-Stack", "Design System", "User Research", "Prototyping", "Customer Journey",
        "Wireframing", "Scrum Master", "Product Owner", "Sprint", "CI", "Use Case", "Auf Augenhöhe", "Alignment",
        "Git Workflow", "State Management", "Web Performance", "SEO", "Data Visualization", "Extrameile gehen", "Black Box"
    ];

    // --- Hilfsfunktionen ---

    // Funktion zum Mischen eines Arrays (Fisher-Yates Algorithmus)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Tausche Elemente
        }
        return array;
    }

    // Funktion zum Ansagen von "BINGO!" (optional mit Sprachausgabe)
    function announceBingo() {
        bingoAchieved = true; // Verhindert weitere Klicks und Meldungen
        console.log("BINGO!"); // Konsolenausgabe als Fallback

        // Versuche, die Web Speech API zu nutzen
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance("BINGO!");
            utterance.lang = 'de-DE'; // Deutsche Aussprache
            speechSynthesis.speak(utterance);
        } else {
            // Fallback, wenn keine Sprachausgabe möglich ist
            alert("BINGO!");
        }

        // Optional: Highlight die gewinnende Reihe/Spalte/Diagonale
        // (Dies würde eine komplexere Logik in checkBingo erfordern)
    }

    // --- Kernfunktionen ---

    // Funktion zum Erstellen des Bingo-Boards
    function createBoard() {
        board.innerHTML = ''; // Altes Board leeren
        cells = []; // Zellen-Array zurücksetzen
        bingoAchieved = false; // Bingo-Status zurücksetzen

        const shuffledWords = shuffleArray([...buzzwordsPool]); // Kopie mischen
        const selectedWords = shuffledWords.slice(0, gridSize * gridSize); // 25 Wörter auswählen

        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('bingo-cell');
            cell.textContent = selectedWords[i];
            cell.dataset.index = i; // Index speichern für leichtere Überprüfung

            // Event Listener für das Klicken auf eine Zelle
            cell.addEventListener('click', handleCellClick);

            board.appendChild(cell);
            cells.push(cell);
        }
    }

    // Funktion, die aufgerufen wird, wenn eine Zelle geklickt wird
    function handleCellClick(event) {
        if (bingoAchieved) return; // Wenn schon Bingo, nichts tun

        const cell = event.target;
        cell.classList.toggle('marked'); // Klasse 'marked' hinzufügen oder entfernen

        checkBingo(); // Nach jedem Klick prüfen, ob Bingo erreicht wurde
    }

    // Funktion zur Überprüfung, ob Bingo erreicht wurde
    function checkBingo() {
        if (bingoAchieved) return;

        const markedIndices = cells.map((cell, index) => cell.classList.contains('marked') ? index : -1)
                                  .filter(index => index !== -1);

        // Hilfsfunktion zum Prüfen, ob alle Indizes in einer Linie markiert sind
        const checkLine = (indices) => indices.every(index => markedIndices.includes(index));

        // Reihen prüfen (horizontal)
        for (let row = 0; row < gridSize; row++) {
            const rowIndices = [];
            for (let col = 0; col < gridSize; col++) {
                rowIndices.push(row * gridSize + col);
            }
            if (checkLine(rowIndices)) {
                announceBingo();
                return; // Bingo gefunden, Prüfung beenden
            }
        }

        // Spalten prüfen (vertikal)
        for (let col = 0; col < gridSize; col++) {
            const colIndices = [];
            for (let row = 0; row < gridSize; row++) {
                colIndices.push(row * gridSize + col);
            }
            if (checkLine(colIndices)) {
                announceBingo();
                return;
            }
        }

        // Diagonale prüfen (links oben nach rechts unten)
        const diag1Indices = [];
        for (let i = 0; i < gridSize; i++) {
            diag1Indices.push(i * gridSize + i);
        }
        if (checkLine(diag1Indices)) {
            announceBingo();
            return;
        }

        // Diagonale prüfen (rechts oben nach links unten)
        const diag2Indices = [];
        for (let i = 0; i < gridSize; i++) {
            diag2Indices.push(i * gridSize + (gridSize - 1 - i));
        }
        if (checkLine(diag2Indices)) {
            announceBingo();
            return;
        }
    }

    // --- Initialisierung ---

    // Event Listener für den Reset-Button
    resetButton.addEventListener('click', createBoard);

    // Das Board beim ersten Laden der Seite erstellen
    createBoard();
});
