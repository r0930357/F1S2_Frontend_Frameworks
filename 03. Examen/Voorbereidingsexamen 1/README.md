# Voorbeeldexamen November 2023 - 2024

De startbestanden die voorzien worden voor dit examen bevatten reeds alle libraries, je moet dus enkel nog een pnpm install uitvoeren.
Het examen bestaat uit twee delen, in deel 1 wordt je React kennis getest en in deel 2 ondervragen we je Cypress kennis.

Dit examen gebruikt willekeurig gegenereerde data, jouw oplossing zal dus andere data tonen dan de screenshots.
Je moet natuurlijk wel dezelfde structuur en functionaliteit implementeren.

Voor sommige componenten is startcode gegeven waarin enkele properties voorzien zijn, deze properties zijn NIET EXHAUSTIEF.
Het is dus mogelijk dat je aan de gegeven componenten nog properties moet toevoegen.

# Deel 1: React

Tijdens dit examen bouw je een heel gelimiteerde versie van de beheersite voor een cinema.
De administrator kan films toevoegen en de informatie over deze films bewerken.

De startbestanden bevatten een stylesheet met opmaak voor dit examen.
Zorg ervoor dat deze opmaak voor het volledige examen ingeladen wordt.
Let op, de startbestanden bevatten ook een bestand cssForStyledComponents.txt, dit zal je in een volgende opgaven als bron moeten gebruiken, je kopieert deze code niet naar het CSS-bestand.

## Mapstructuur startbestanden

```
.
├── public
│    └── vite.svg
├── src
│    ├── api
│    │    ├── NIET_OPENEN_WORD_GEBRUIKT_DOOR_DE_API_FILES
│    │    │    ├── data
│    │    │    ├── databaseSimulation.ts
│    │    │    ├── generateData.ts
│    │    │    └── utils.ts
│    │    ├── cinemaApi.ts
│    │    └── movieApi.ts
│    ├── assets
│    │    └── react.svg
│    ├── hooks
│    │    └── useIsAdmin.ts
│    ├── models
│    │    ├── ICinema.ts
│    │    ├── ICrew.ts
│    │    ├── IMovie.ts
│    │    └── ISchedule.ts
│    ├── pages
│    │    └── home
│    │         ├── detail
│    │         │    ├── detailPage.tsx
│    │         │    └── editMovie.tsx
│    │         ├── cinemaSelector.tsx
│    │         ├── homePage.tsx
│    │         └── movie.tsx
│    ├── utils
│    │	  ├── loadingPage.tsx
│    │	  └── loadingPart.tsx
│    ├── app.tsx
│    ├── cssForStyledComponents.txt
│    ├── main.css
│    ├── main.tsx
│    └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
└── vite.config.ts
```

In het verdere verloop van dit examen worden af en toe CSS-klassen vermeld die toegevoegd kunnen worden om de opmaak in de screenshots na te bouwen.
Als jouw oplossing er anders uitziet, is dit geen probleem.
De focus van het examen ligt op de functionaliteit, focus dus niet op CSS-problemen, deze hebben, behalve het koppelen van de .css file en het gebruik van styled-components geen invloed op je resultaat.

## Navigatie, routing & context
Bouw een navigatiebalk uit met één link.

De link 'Home' verwijst naar het root path '/' en toont de component HomePage, die al terug te vinden is in de startbestanden.

Om onderstaande lay-out na te bouwen, gebruik je een unordered list om de items in de navigatiebalk te tonen en omring je deze list in een div die de klasse navbar krijgt.

![Figuur 1: Navbar met Home link](../Afbeeldingen/Voorbereidingsexamen%201/screenshot1_navabar_home_link.png)</br>
*Figuur 1: Navbar met Home link*

Voorzie ook alvast een route voor de detailpagina van een film. Maak hierbij gebruik van de id als unieke navigatie parameter.
Dit pad toont de component DetailPage (te vinden in de startbestanden).
Plaats tenslotte, in app.tsx, de routing-component binnen suspense, gebruik de LoadingPage component uit de startbestanden als fallback.
Omring de suspense tenslotte nog met een div die de klasse container krijgt (deze is al aanwezig).

### Context
De navigatiebalk bevat ook nog een select menu waarmee aangegeven kan worden of de applicatie in admin of user modus getoond moet worden.
Maak gebruik van context om deze keuze te bewaren. Voorlopig gebeurt er nog niets als je de view-modus aanpast.

![Figuur 2: View-mode dropdown](../Afbeeldingen/Voorbereidingsexamen%201/screenshot2_navabar_context.png)</br>
*Figuur 2: View-mode dropdown*

## Home pagina
Deze pagina stelt de administrator in staat om een overzicht te bekijken van alle films die in de verschillende cinema’s te zien zijn. Daarnaast kan de administrator ook een nieuwe film toevoegen.
Een gewone gebruiker kan enkel de films bekijken.
Alle data in dit examen moet opgehaald en aangepast worden via TanStack (React) Query.

### Overzicht van de cinema's
Gebruik react-query om een overzicht op te halen van de verschillende cinema’s en gebruik CinemaSelector component om de cinema’s op te lijsten.
Indien de gebruiker een bepaalde cinema geselecteerd heeft, moet het  `<button>` in de bijhorende CinemaSelector de CSS-klasse selected krijgen.

![Figuur 3: Cinema list View-mode dropdown](../Afbeeldingen/Voorbereidingsexamen%201/screenshot3_cinema_selector.png)</br>
*Figuur 3: Cinema list*

Als de pagina in de admin-modus bekeken wordt, is er naast de lijst van cinema’s ook een knop ‘All’ beschikbaar waarmee alle films bekeken kunnen worden.

![Figuur 4: Cinema list (admin)](../Afbeeldingen/Voorbereidingsexamen%201/screenshot4_cinema_selector_admin.png)</br>
*Figuur 4: Cinema list (admin)*

Standaard wordt de eerste knop geselecteerd, ongeacht of dit de “All” knop is of een echte cinema.
Als er gewisseld wordt tussen de view moeten de knoppen zich mee aanpassen.
Als de pagina dus in admin modus staat en daarna gewisseld wordt naar user modus, moet de eerste echte cinema automatisch geselecteerd worden.

### Overzicht van de films
Zodra een cinema (of alle cinema’s) geselecteerd zijn, moeten de films voor die cinema geladen worden.
Om dit overzicht te bouwen maak je gebruik van de Movie component die reeds voorzien is in de startbestanden.

Deze component bevat nog geen opmaak.
Gebruik de inhoud van het bestand cssForStyledComponents.txt om een nieuwe styled component te bouwen die je als container gebruikt voor de inhoud van de Movie component.

![Figuur 5: Overzicht films (Admin)](../Afbeeldingen/Voorbereidingsexamen%201/screenshot5_movie_list_admin.png)</br>
*Figuur 5: Overzicht films (Admin)*

De 'Edit' knop moet nog verborgen worden in de user modus, daarnaast moet de knop verwijzen naar de detailpagina van de film.

![Figuur 6: Overzicht films (User)](../Afbeeldingen/Voorbereidingsexamen%201/screenshot6_movie_list_user.png)</br>
*Figuur 6: Overzicht films (User)*

Tenslotte moet er gebruik gemaakt worden van suspense om de LoadingPart component te tonen terwijl de films voor een bepaalde cinema aan het laden zijn.
Deze component is al te vinden in de startbestanden.

![Figuur 7: Films laden met Suspense](../Afbeeldingen/Voorbereidingsexamen%201/screenshot7_movie_list_suspense.png)</br>
*Figuur 7: Films laden met Suspense*

### Film aanmaken
Voeg onder de lijst van cinema’s een nieuwe knop toe waarmee een nieuwe film toegevoegd kan worden aan de database.
Deze knop mag enkel zichtbaar zijn in de admin modus.

![Figuur 8: Formulier voor het aanmaken van een film](../Afbeeldingen/Voorbereidingsexamen%201/screenshot8_add_movie.png)</br>
*Figuur 8: Formulier voor het aanmaken van een film*

Als de administrator op deze knop drukt, wordt er een nieuwe film toegevoegd aan de hand van een afwachtende update.

Terwijl een film aangemaakt wordt, is de knop disabled en wordt de LoadingPart component gerenderd als kind van de knop.

![Figuur 9: Film aanmaken](../Afbeeldingen/Voorbereidingsexamen%201/screenshot9_add_movie_loading.png)</br>
*Figuur 9: Film aanmaken*

## Detailpagina
De lay-out voor de detailpagina is volledig gegeven, enkel de functionaliteit moet nog uitgewerkt worden.

Gebruik de navigatieparameter om informatie op te halen over de film waarvan de details bekeken moeten worden.
Maak vervolgens gebruik van de EditMovie component om onderstaand overzicht te bouwen.

![Figuur 10: Detail pagina](../Afbeeldingen/Voorbereidingsexamen%201/screenshot10_detail_page.png)</br>
*Figuur 10: Detail pagina*

### Navigatie
Via de knop in de titelbalk (<--) moet de administrator terug kunnen navigeren naar de vorige pagina, ongeacht wat de vorige pagina is.
Gebruik dus geen hardcoded URL om deze navigatie te implementeren.

Verder moet het onmogelijk zijn om de detailpagina te bekijken in de user modus.
Zodra de user modus geactiveerd wordt, wordt de gebruiker herleid naar de home pagina.

### Acteur aanmaken
Het formulier om een acteur aan te maken is reeds aanwezig, maar het werkt nog niet.

Zorg ervoor dat het formulier werkt en dat het mogelijk wordt om een nieuwe acteur toe te voegen aan een film via een optimistische update.
Nadat de acteur toegevoegd is, moet dit natuurlijk ook zichtbaar zijn op de home pagina.

# Deel 2: Testing

De startbestanden bevatten reeds de nodige Cypress configuratie, inclusief de nodige commando’s.
Pas de Cypress environment variables aan voordat je testen begint te schrijven. De startbestanden bevatten reeds de nodige data-cy properties.
Je mag er altijd extra toevoegen, maar normaal gezien is dit niet nodig.

**De properties zijn de volgende:**
- survey: Verwijst naar een survey, gekoppeld aan elke individuele survey.
- edit-survey: Verwijst naar de knop waarmee de detailpagina van een survey geopend kan worden.
- english: Verwijst naar de knop waarmee de Engelstalige versie van de site geopend kan worden.
- dutch: Verwijst naar de knop waarmee de Nederlandstalige versie van de site geopend kan worden.
- survey-title: Verwijst naar de titel van de overzichtspagina voor surveys.
- new-survey-form: Verwijst naar het volledige formulier waarmee een nieuwe survey aangemaakt kan worden.

## End-to-end testen
Schrijf onderstaand testscenario uit voor de ‘/’ route. Twee van de onderstaande test slagen standaard niet.

**Pas de React code aan zodat de tests wel slagen:**
- Een niet-ingelogde gebruiker
- Kan de surveys zien, maar kan de edit knop en het formulier om een nieuwe survey aan te maken niet zien.
- Een ingelogde gebruiker
	- Kan geen survey aanmaken met een lege naam.
	- Kan de taal selecteren. Wanneer er voor Engels gekozen is moet de titel “My Surveys” zijn, wanneer er voor Nederlands gekozen is moet de titel iets anders zijn.
	- Kan een survey aanmaken en deze vervolgens terugvinden op de overzichtspagina.

## Mapstructuur Testing

```
.
├── deel_2_testing
│    ├── cypress
│    │    ├── fixtures
│    │    │    └── example.json
│    │    ├── support
│    │    │    ├── commands.js
│    │    │    ├── component.js
│    │    │    ├── component-index.html
│    │    │    ├── e2e.js
│    │	  │    └── index.ts
│    │    └── public
│    │         └── vite.svg
│    ├── src
│    │    ├── api
│    │    │    ├── NIET_OPENEN_WORD_GEBRUIKT_DOOR_DE_API_FILES
│    │    │    │    ├── databaseSimulation.ts
│    │    │    │    └── generateData.ts
│    │    │    ├── questionApi.ts
│    │    │    ├── surveyApi.ts
│    │    │    └── userApi.ts
│    │    ├── context
│    │    │    └── languageContext.tsx
│    │    ├── models
│    │    │    ├── IQuestion.ts
│    │    │    ├── ISurvey.ts
│    │    │    └── IUser.ts
│    │    ├── navigation
│    │    │    ├── navigation.tsx
│    │    │    └── routing.tsx
│    │    ├── pages
│    │    │    ├── detail
│    │    │    │    ├── multiLineQuestion.tsx
│    │    │    │    ├── multipleSelectQuestion.tsx
│    │    │    │    ├── singleLineQuestion.tsx
│    │    │    │    └── surveyDetail.tsx
│    │    │    ├── survey.tsx
│    │    │    └── surveys.tsx
│    │    └── utils
│    │         ├── loadingPage.jsx
│    │         └── loadingPart.jsx
│    ├── app.tsx
│    ├── main.css
│    └── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── cypress.config.ts
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
│ // Mapstructuur Deel 1
*
```