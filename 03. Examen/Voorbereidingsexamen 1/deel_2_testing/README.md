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