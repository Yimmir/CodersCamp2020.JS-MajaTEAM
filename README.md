# Coders Camp 2020 | Projekt Zespołowy | JavaScript

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp](https://coderscamp.pl/).
Aplikację wykonali uczestnicy kursu pod czujnym okiem mentora.

**Mentor**: Maja Jelenik

**Uczestnicy**:

-   [Łukasz Brzyski](https://github.com/LukasBrzyski)
-   [Dariusz Knysak](https://github.com/DariuszKny)
-   [Marlena Kruszewska](https://github.com/marlexxa)
-   [Damian Kuczek](https://github.com/dkuczek)
-   [Mateusz Leszniewski](https://github.com/Yimmir)
-   [Adam Spinek](https://github.com/Arvanes)

## Star Wars Quiz

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](https://yimmir.github.io/CodersCamp2020.JS-MajaTEAM/).

### Cel projektu

Celem projektu było napisanie aplikacji wykorzystującej dotychczas nabytą wiedzę z następujących technologi: html, css, javascript.
Zespół projektowy zdecydował się na aplikację - quiz związaną z tematyką uniwersum Gwiezdnych Wojen. Aplikacja w formie testu jednokrotnego wyboru sprawdza czy użytkownik rozpoznaje, w zależności od wyboru kategorii - osoby, pojazdy lub statki kosmiczne.

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań.
Szablon projektu dostępny jest [TUTAJ](https://github.com/CodersCamp2020/CodersCamp2020.Project.JavaScript.StarWarsQuiz/).

### Działanie aplikacji

#### Ekran startowy

Po uruchomieniu aplikacji wyświetlony zostaje przysik "Play" oraz "Credits" u dołu strony. Po kliknięciu przycisku Play zostajemy poproszeni o wpisanie nazwy gracza. Pole przyjmuje dowolną nazwę o długości 3 - 15 znaków. Imię zatwierdzamy enterem lub przyciskiem "Next".

#### Menu Główne

W menu głównym gracz ma 3 opcje do wyboru:

- [Start](#Start)
- [Rules](#Rules)
- [Highscores](#Highscores)

Z poziomu każdego ekranu jest możliwość powortu do menu głównego przy pomocy przycisku "Home" w lewym górnym rogu ekranu.

##### Start

Przenosi nas  na ekran wyboru kategorii i poziomu trudności. Wybór kategorii jest obowiązkowy przed rozpoczęciem gry.

##### Rules

Ekran zawierający krótkie wprowadzenie fabularne jak i opis zasad gry.

##### Highscores

Ekran, na którym są wyświetlane najlepsze wyniki. Został podzielony na dwie sekcje: wyniki lokalne (Local Scores) zapisujące się w local storage oraz globalne (Global Scores) przechowywane w zewnętrznej bazie danych.

#### Rozgrywka — Quiz

Rozgrywka polega na rozpoznawaniu przez użytkownika postaci, pojazdów lub statków kosmicznych (w zależności od wybranej kategorii). Graczowi przedstawiane jest zdjęcie oraz pytanie o to co się na nim znajduje. Do wyboru ma 4 odpowiedzi, z których tylko jedna jest prawidłowa. Po kliknięciu na wybranej odpowiedzi gracz otrzymuje odpowiedź w postaci zmiany koloru opcji na zielony w przypadku prawidłowej odpowiedzi lub czerwony w przypadku gdy odpowiedział błędnie. Prawidłowe odpowiedzi przybliżają statek gracza do głównego celu jakim jest Gwiazda Śmierci. Celem jest odpowiedź na 20 pytań przed upływem czasu. Jeżeli to się uda Gwiazda Śmierci zostaje zniszczona a gracz jest nagradzany miesjcem w tabeli wyników. Czas na ukończenie quizu zależy od wybranego poziomu trudności 

### Zmiany wprowadzone w wymaganiach

- strona wizualna została przeprojektowana
- gracz ściga się z czasem, przeciwnik nie losuje swoich odpowiedzi

### Zrealizowane dodatkowe zadania

- wyniki gracza są zapisywane w zewnętrznej bazie danych
- istnieje opcja wyboru czasu gry

## Development aplikacji

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

-   JavaScript
-   Web APi dla JavaScript
-   CSS
-   HTML
-   Firebase
-   Jest.js
-   Parcel
-   Babel


### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run start:dev`

Aplikacja będzie dostępna pod adresem [localhost:8765/index.html](http://localhost:8765/index.html)

Kod produkcyjny aplikacji znajduje się w katalogu `src`.

### Uruchomienie testów

Uruchom testy, wykonując komendę: `npm run test`. Testy z raportem pokrycia uruchomisz za pomocą: `npm run test:cov`.

Kod testów umieszczamy w katalogu `test`.

### Organizacja pracy

Praca zespołu była organizowana przy użyciu narzędzia Trello. Zadania zostały podzielone na listy i karty, do których przydzielani byli poszczególni członkowie zespołu. Główne kanały komunikacji zespołu to Discord oraz Google Meet.