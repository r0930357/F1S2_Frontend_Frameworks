# Voorbeeldexamen - November 2023 - 2024

De startbestanden die voorzien worden voor dit examen bevatten reeds alle libraries, je moet dus enkel nog een pnpm install uitvoeren.
Het examen bestaat uit twee delen, in deel 1 wordt je React kennis getest en in deel 2 ondervragen we je Cypress kennis.

Dit examen gebruikt willekeurig gegenereerde data, jouw oplossing zal dus andere data tonen dan de screenshots.
Je moet natuurlijk wel dezelfde structuur en functionaliteit implementeren.

Voor sommige componenten is startcode gegeven waarin enkele properties voorzien zijn, deze properties zijn NIET EXHAUSTIEF.
Het is dus mogelijk dat je aan de gegeven componenten nog properties moet toevoegen.

# Deel 1: React

Tijdens dit examen bouw je een heel gelimiteerde versie van de beheersite voor een cinema.
De administrator kan films toevoegen en de informatie over deze films bewerken.

[startbestanden] https://gitpub.sebastiaanh.com/public/web/6721a963-fe70-4283-9f9f-e6377156f445/

De startbestanden bevatten een stylesheet met opmaak voor dit examen.
Zorg ervoor dat deze opmaak voor het volledige examen ingeladen wordt.
Let op, de startbestanden bevatten ook een bestand cssForStyledComponents.txt, dit zal je in een volgende opgaven als bron moeten gebruiken, je kopieert deze code niet naar het CSS-bestand.

In het verdere verloop van dit examen worden af en toe CSS-klassen vermeld die toegevoegd kunnen worden om de opmaak in de screenshots na te bouwen.
Als jouw oplossing er anders uitziet, is dit geen probleem.
De focus van het examen ligt op de functionaliteit, focus dus niet op CSS-problemen, deze hebben, behalve het koppelen van de .css file en het gebruik van styled-components geen invloed op je resultaat.

## Navigatie, routing & context
Bouw een navigatiebalk uit met één link.

De link 'Home' verwijst naar het root path '/' en toont de component HomePage, die al terug te vinden is in de startbestanden.

Om onderstaande lay-out na te bouwen, gebruik je een unordered list om de items in de navigatiebalk te tonen en omring je deze list in een div die de klasse navbar krijgt.
Voorzie ook alvast een route voor de detailpagina van een film. Maak hierbij gebruik van de id als unieke navigatie parameter.
Dit pad toont de component DetailPage (te vinden in de startbestanden).
Plaats tenslotte, in app.tsx, de routing-component binnen suspense, gebruik de LoadingPage component uit de startbestanden als fallback.
Omring de suspense tenslotte nog met een div die de klasse container krijgt (deze is al aanwezig).

### Context
De navigatiebalk bevat ook nog een select menu waarmee aangegeven kan worden of de applicatie in admin of user modus getoond moet worden.
Maak gebruik van context om deze keuze te bewaren. Voorlopig gebeurt er nog niets als je de view-modus aanpast.

## Home pagina
Deze pagina stelt de administrator in staat om een overzicht te bekijken van alle films die in de verschillende cinema’s te zien zijn. Daarnaast kan de administrator ook een nieuwe film toevoegen.
Een gewone gebruiker kan enkel de films bekijken.
Alle data in dit examen moet opgehaald en aangepast worden via TanStack (React) Query.

### Overzicht van de cinema's
Gebruik react-query om een overzicht op te halen van de verschillende cinema’s en gebruik CinemaSelector component om de cinema’s op te lijsten.
Indien de gebruiker een bepaalde cinema geselecteerd heeft, moet het <button> in de bijhorende CinemaSelector de CSS-klasse selected krijgen.
Als de pagina in de admin-modus bekeken wordt, is er naast de lijst van cinema’s ook een knop ‘All’ beschikbaar waarmee alle films bekeken kunnen worden.
Standaard wordt de eerste knop geselecteerd, ongeacht of dit de “All” knop is of een echte cinema.
Als er gewisseld wordt tussen de view moeten de knoppen zich mee aanpassen.
Als de pagina dus in admin modus staat en daarna gewisseld wordt naar user modus, moet de eerste echte cinema automatisch geselecteerd worden.

### Overzicht van de films
Zodra een cinema (of alle cinema’s) geselecteerd zijn, moeten de films voor die cinema geladen worden.
Om dit overzicht te bouwen maak je gebruik van de Movie component die reeds voorzien is in de startbestanden.

Deze component bevat nog geen opmaak. Gebruik de inhoud van het bestand cssForStyledComponents.txt om een nieuwe styled component te bouwen die je als container gebruikt voor de inhoud van de Movie component.

De 'Edit' knop moet nog verborgen worden in de user modus, daarnaast moet de knop verwijzen naar de detailpagina van de film.

Tenslotte moet er gebruik gemaakt worden van suspense om de LoadingPart component te tonen terwijl de films voor een bepaalde cinema aan het laden zijn.
Deze component is al te vinden in de startbestanden.

### Film aanmaken
Voeg onder de lijst van cinema’s een nieuwe knop toe waarmee een nieuwe film toegevoegd kan worden aan de database.
Deze knop mag enkel zichtbaar zijn in de admin modus.

Als de administrator op deze knop drukt, wordt er een nieuwe film toegevoegd aan de hand van een afwachtende update.
Terwijl een film aangemaakt wordt, is de knop disabled en wordt de LoadingPart component gerenderd als kind van de knop.

## Detailpagina
De lay-out voor de detailpagina is volledig gegeven, enkel de functionaliteit moet nog uitgewerkt worden.

Gebruik de navigatieparameter om informatie op te halen over de film waarvan de details bekeken moeten worden.
Maak vervolgens gebruik van de EditMovie component om onderstaand overzicht te bouwen.

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

[startbestanden] https://gitpub.sebastiaanh.com/public/web/5ba334fc-144e-4cc5-a205-e19df9ea9c72/

De startbestanden bevatten reeds de nodige Cypress configuratie, inclusief de nodige commando’s.
Pas de Cypress environment variables aan voordat je testen begint te schrijven. De startbestanden bevatten reeds de nodige data-cy properties.
Je mag er altijd extra toevoegen, maar normaal gezien is dit niet nodig.

De properties zijn de volgende:
- survey: Verwijst naar een survey, gekoppeld aan elke individuele survey.
- edit-survey: Verwijst naar de knop waarmee de detailpagina van een survey geopend kan worden.
- english: Verwijst naar de knop waarmee de Engelstalige versie van de site geopend kan worden.
- dutch: Verwijst naar de knop waarmee de Nederlandstalige versie van de site geopend kan worden.
- survey-title: Verwijst naar de titel van de overzichtspagina voor surveys.
- new-survey-form: Verwijst naar het volledige formulier waarmee een nieuwe survey aangemaakt kan worden.

## End-to-end testen
Schrijf onderstaand testscenario uit voor de ‘/’ route. Twee van de onderstaande test slagen standaard niet.
Pas de React code aan zodat de tests wel slagen.

-Een niet-ingelogde gebruiker
	- Kan de surveys zien, maar kan de edit knop en het formulier om een nieuwe survey aan te maken niet zien.
-Een ingelogde gebruiker
	- Kan geen survey aanmaken met een lege naam.
	- Kan de taal selecteren. Wanneer er voor Engels gekozen is moet de titel “My Surveys” zijn, wanneer er voor Nederlands gekozen is moet de titel iets anders zijn.
	- Kan een survey aanmaken en deze vervolgens terugvinden op de overzichtspagina.