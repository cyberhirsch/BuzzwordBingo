# 🎯 Buzzword Bingo - Medieninformatik Edition ✨

Eine einfache, statische Webanwendung zum Spielen von Buzzword Bingo mit aktuellen Buzzwords, Anglizismen und Hype-Themen aus dem Bereich Medieninformatik (und verwandten Gebieten wie Webentwicklung, KI, UX/UI).

Ideal für Vorlesungen, Konferenzen, Meetings oder einfach nur zum Spaß! 😉

**(English: A simple, static web application for playing Buzzword Bingo with current buzzwords, anglicisms, and hype topics from the field of Media Informatics / Computer Science.)**

## ✨ Features

*   **Dynamisches 5x5 Bingo-Board:** Jedes Spiel generiert ein neues Board mit zufällig ausgewählten Begriffen aus einem vordefinierten Pool.
*   **Interaktiv:** Klicke auf ein Feld, um es als "gehört" zu markieren.
*   **Bingo-Erkennung:** Erkennt automatisch volle Reihen (horizontal, vertikal, diagonal).
*   **"BINGO!"-Ansage:** Nutzt die Web Speech API (falls verfügbar), um "BINGO!" laut auszusprechen, ansonsten wird ein Alert angezeigt.
*   **Responsive Design:** Funktioniert auf Desktop-Browsern und mobilen Geräten.
*   **Reset-Funktion:** Starte jederzeit ein neues Spiel mit neuen Wörtern.
*   **Statisch & Offline-fähig:** Läuft komplett im Browser (HTML, CSS, Vanilla JavaScript). Kein Server oder Internetverbindung nach dem Laden nötig.
*   **Anpassbar:** Der Pool an Buzzwords kann einfach in der `script.js`-Datei erweitert oder geändert werden.

## 🚀 Wie man es benutzt

Da es sich um eine rein statische Website handelt, ist die Nutzung sehr einfach:

1.  **Repository klonen oder herunterladen:**
    ```bash
    git clone https://github.com/DEIN_BENUTZERNAME/DEIN_REPO_NAME.git
    ```
    Oder lade das Projekt als ZIP-Datei herunter und entpacke es.

2.  **Ordner öffnen:** Navigiere in das Verzeichnis, in das du das Projekt geklont oder entpackt hast.

3.  **`index.html` öffnen:** Öffne die Datei `index.html` in deinem bevorzugten Webbrowser (z.B. Chrome, Firefox, Safari, Edge).

Das war's! Das Bingo-Spiel sollte nun im Browser laufen.

## 🛠️ Technologie-Stack

*   **HTML5:** Für die Grundstruktur der Seite.
*   **CSS3:** Für das Styling und das responsive Layout (Flexbox/Grid).
*   **Vanilla JavaScript (ES6+):** Für die Spiellogik, DOM-Manipulation, Zufallsauswahl der Wörter, Bingo-Erkennung und die Nutzung der Web Speech API.

## 🔧 Anpassung der Buzzwords

Möchtest du eigene Buzzwords hinzufügen oder die vorhandenen ändern?

1.  Öffne die Datei `script.js`.
2.  Finde das Array `buzzwordsPool`.
3.  Bearbeite die Liste nach Belieben. Füge neue Begriffe als Strings hinzu oder entferne vorhandene.
    ```javascript
    const buzzwordsPool = [
        "KI / AI", "Machine Learning", // ... existing words
        "Dein neues Buzzword",         // <-- Füge hier neue hinzu
        "Noch ein Hype-Begriff"
        // ... stelle sicher, dass du mindestens 25 hast!
    ];
    ```
4.  Speichere die Datei und lade `index.html` im Browser neu.


## 📄 Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE.md).
