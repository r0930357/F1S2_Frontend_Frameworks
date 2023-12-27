# Les 1: Componenten

Deze les bespreken we hoe een React app aangemaakt kan worden, hoe de mappenstructuur van een React app in elkaar zit en hoe we eenvoudige componenten kunnen bouwen en gebruiken.

## Project aanmaken
Een nieuw React project wordt aangemaakt via onderstaand commando.

> **ℹ️ Hint**
>
> Voer dit commando niet uit in een map die met de cloud gesynchroniseerd wordt.
> Voor één project zijn er duizenden kleine files nodig. Dit vertraagd je cloud storage enorm.
> Het is ook mogelijk dat je andere problemen ondervindt als je gebruik maakt van een met de cloud gesynchroniseerde map om je project te bewaren.
> Een git repository met een online remote, is een veel veiligere keuze.

```
pnpm create vite projectNaam --template react-swc-ts
```

Hierin wordt projectNaam logischerwijs vervangen wordt met de naam van het nieuwe project.
Dit commando produceert een nieuwe map projectNaam die het nieuwe React project bevat.
Deze map wordt aangemaakt als submap van de locatie waar het commando uitgevoerd wordt.
Als de terminal zich, bijvoorbeeld, bevindt in ~/projects, dan zal het commando pnpm create vite projectNaam --template react-swc-ts een nieuwe map ~/projects/project Naam aanmaken.

Bovenstaand commando genereert enkel de mappenstructuur, maar installeert React en alle andere nodige pakketten nog niet, hiervoor moet je, zoals in de uitvoer in de terminal te zien is, nog 2 extra commando's uitvoeren.

```
cd projectNaam
pnpm install
```

## Mappenstructuur

De mappenstructuur van een React project is relatief eenvoudig.
Hieronder bespreken we elke map en elk bestand.

![Figuur 1: React mappenstructuur](../Lesinhoud/Figuur%201%20React%20mappenstructuur.png)</br>
*Figuur 1: React mappenstructuurFiguur 1: React mappenstructuur*

### node_modules
De node_modules map bevat alle bibliotheken en tools die nodig zijn om een React applicatie te ontwikkelen en publiceren.
Daarnaast komen ook alle extra pakketten die jij, als ontwikkelaar, installeert in deze map te staan.
Omdat we pnpm gebruiken bevat deze map enkel symbolic links naar een algemene library cache op jouw machine.
Dit betekent dus dat deze map overbodig is als je code uploadt, in een git repository plaatst, ... Iedereen die de package.json file heeft, kan de node_modules map dupliceren.
Voeg deze map dus altijd toe aan je .gitignore file.

> **ℹ️ Hint**
> 
> De node_modules map kan eenvoudig gereproduceerd worden met onderstaand commando.
> ```
> pnpm install
> ```


### public
De map public bevat statische resources die niet mee gecompileerd, gebundeld of minified moeten worden. Deze map bevat standaard enkel het Vite logo. Normaliter moet er niet veel toegevoegd worden aan deze folder, behalve een favicon en eventuele statische bestanden (bijvoorbeeld een CV (pdf) op een portfolio). Alle code, stylesheets en images komen in de src map te staan. Zo kunnen assets die uiteindelijk niet gebruikt worden, uitgesloten worden uit de production bundle.

### src
Deze map bevat de eigenlijke code van de React applicatie, standaard bevat deze map een hele reeks bestanden. We vertrekken, voor het OPO Frontend Frameworks, elke les van een leeg project, de inhoud van de src map mag je dus weggooien als je een nieuw project aanmaakt.

### .gitignore
Elk React project wordt standaard geïnitialiseerd als een git project. Het .gitignore bestand bevat een opsomming van de bestanden die niet in version control geplaatst mogen worden, bijvoorbeeld de node_modules en dist mappen.

### package.json
Binnen package.json worden alle geïnstalleerde pakketten opgesomd. Hiervoor worden 2 attributen gebruikt binnen het JSON-object. Het eerste attribuut dependencies bevat een lijst van alle geïnstalleerde pakketten die relevant zijn voor de eindgebruiker. Het tweede attribuut devDependencies bevat een lijst van alle geïnstalleerde pakketten die enkel relevant zijn tijdens de ontwikkeling van de applicatie. Zaken zoals linters, transpilers, build-tools, en testing libraries, horen hier thuis. Tijdens het compilatieproces worden enkel de dependencies gekopieerd naar de productie-build. De devDependencies worden gebruikt om de productie-build te genereren.

### index.html
Dit is de enige pure HTML-file die we gebruiken in een React project. Binnen deze HTML-pagina mag enkel de inhoud van het <head> tag aangepast worden, bijvoorbeeld om het favicon te wijzigen, aan SEO te doen of iets van een CDN in te laden. De HTML-pagina bevat standaard volgende code:

> <details>
> <summary>/index.html</summary>
>
> ```
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Vite + React</title>
>   </head>
>   <body>
>     <div id="root"></div>
>     <script type="module" src="/src/main.tsx"></script>
>   </body>
> </html>
> ```
> </details>

Het gemarkeerde`<div>` element vormt de root van onze pagina, React zal hier de volledige pagina in laden via JavaScript.

## Renderen
Zoals eerder gezegd, bestaat index.html uit zeer weinig code. De body bevat slechts een div met het ID root. Dit element vormt de kern van de applicatie, alle componenten zullen hierin geplaatst worden door React.

> <details>
> <summary>/index.html</summary>
>
> ```
> <!DOCTYPE html>
>   <body>
>     <div id="root"></div>
>     <script type="module" src="/src/main.tsx"></script>
>   </body>
> ```
> </details>

Net zoals er voor een statische website steeds een index.html nodig is, moeten we voor een React website ook steeds een bestand toevoegen dat als ingangspunt dient voor de applicatie.
Dit bestand krijgt de naam main.tsx en wordt natuurlijk in de src map geplaatst.
In dit bestand leggen we de link met /index.html. Het `<div>` element kan eenvoudig opgehaald worden via de standaard JavaScript methode document.getElementById. We gebruiken dit element vervolgens om de root (de plaats waarin de volledige website door React gerenderd zal worden) van onze React applicatie te initialiseren. Omdat we met TypeScript werken, moeten we een cast toevoegen waarmee we aangeven dat het root element gegarandeerd bestaat. Let ook op het import-statement, als je online gaat zoeken vindt je waarschijnlijk nog heel wat bronnen voor React <= 17.0.2, waarvoor het import-statement een andere structuur had.

> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import ReactDOM from 'react-dom/client'
>
>
> const root = ReactDOM.createRoot(
> document.getElementById('root') as HTMLElement
> )
> ```
> </details>

Om vervolgens een React component te tonen moet de React method render gebruikt worden.
De render-methode heeft één parameter, de JSX-code die gerenderd moet worden.

> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> // Importeren van react-dom, de bibliotheek die het renderen mogelijk maakt.
> import ReactDOM from 'react-dom/client'
>
> // Aanmaken van de root voor de React applicatie.
> const root = ReactDOM.createRoot(
> document.getElementById('root') as HTMLElement
> )
>
> root.render(
> <h1>Hello World!</h1>
> )
> ```
> </details>

Bovenstaande code produceert een pagina waarop de tekst "Hello World!" getoond wordt.
Om deze code uit te testen moet de development server gestart worden, dit kan met het commando:
```
pnpm run dev
```

Nadat je dit commando uitgevoerd hebt, zie je in de terminal een opsomming van de IP-adressen waarop de development server beschikbaar is. Kopieer dit naar je browser of click op het adres om automatisch naar de browser te gaan.

![Figuur 2: Vite dev server](../Lesinhoud/Figuur%202%20Vite%20dev%20server..png)</br>
*Figuur 2: Vite dev server*

## JSX
React heeft ervoor gekozen om JavaScript en HTML te combineren, een component combineert markup en JavaScript in één klein stukje code dat één bepaald UI-element implementeert.

Klassieke JavaScript biedt geen bijzonder goede ondersteuning voor het schrijven van HTML-code, hiervoor zijn meestal een hele hoop string concatenaties nodig. Dit heeft trage en moeilijk te lezen code als gevolg, JSX is een uitbreiding voor JavaScript (en TypeScript) die hier een oplossing voor biedt.

> **ℹ️<strong> Begrip: JSX</strong>**
>
>JavaScript XML (JSX), laat toe om HTML-code in JavaScript te gebruiken zonder quotes of concatenaties.
> Het is natuurlijk onmogelijk voor een browser om zo'n code te lezen en uit te voeren. Daarom moet elke lijn JSX-code gecompileerd worden naar klassiek JavaScript code.
> Als we TypeScript en JSX combineren met elkaar, gebruiken we de tsx extensie. Via SWC wordt onderstaande TypeScript code gecompileerd naar de bijhorende JavaScript code.
>
> [SWC Playground](https://play.swc.rs/?version=1.3.55&code=H4sIAAAAAAAAA0vOzysuUUjNSc1NzStRsFWwyTC080jNycnXUSjPL8pJUbTRB4oAAJwYQtAmAAAA&config=H4sIAAAAAAAAA1WPSw7CMAxE9z1F5DVbWHAHDhEFtwpKmsh2JaKqdyffAjv7zYzG3iel4MUG7mrPY16iJkY690w4raLfmYCkiGzIRoHLUIWLJLRhJUcTQDQtKCWEfO1ucCEwZjZrx9iZt6ud02%2BfCT4SMv8bi1WvizvzrW7qleDDc6ti%2F6Pc2upv8DWNsnJvJZYfI1h%2FOD6B5k2sEgEAAA%3D%3D)
> 
> <details>
> <summary>TypeScript</summary>
> 
> ```
> const element = <h1>Hello, world!</h1>
> ```
>  
> </details>
> <details>
> <summary>JavaScript</summary>
>
> ```
> var element=React.createElement("h1",null,"Hello, world!");
> ```
> </details>

### Syntax regels
TSX is een geweldige uitbreiding op TypeScript, maar er zijn enkele belangrijke syntax regels waarmee rekening gehouden moet worden.
De onderstaande, geldige, HTML-code kan niet zomaar aan een variabele toegekend worden in TSX.

> <details>
> <summary>HTML</summary>
>
> ```
> <h1>Hello World!</h1>
> <h1>Hello Universe!</h1>
> ```
>
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> const element = <h1>Hello World!</h1>
> <h1>Hello Universe!</h1>;
> ```
> </details>
De voorgaande code produceert (in WebStorm) volgende foutmelding.

<p style="color: red" align="center">TS2657: JSX expressions must have one parent element.</p>

Dit is een gevolg van het integreren van HTML in JavaScript (en de bijhorende syntax regels).
Zoals de foutmelding zegt, moeten 2 opeenvolgende JSX-elementen binnen een ander element geplaatst worden.
In welk element de HTML-code geplaatst wordt speelt geen rol, dit kan een `<div>`, `<span>`, ... zijn.

> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> const element = <div>
> <h1>Hello World!</h1>
> <h1>Hello Universe!</h1>
> </div>
> ```
>
> </details>

Bovenstaande code werkt en genereert geen foutmeldingen meer, maar misschien werk je liever met perfect uitgelijnde code? In dat geval omring je de volledige code met ronde haken.

> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> const element = (
> <div>
> <h1>Hello World!</h1>
> <h1>Hello Universe!</h1>
> </div>
> )
> ```
>
> </details>

Bovenstaande voorbeelden zijn relatief beperkt, we maken eigenlijk geen gebruik van TypeScript, alles wat er gebeurt, zou perfect met klassieke HTML kunnen.
TSX wordt pas echt interessant als we TypeScript code integreren in HTML-code.

We kunnen TypeScript expressies gebruiken door deze te omringen met accolades.
Boven- en onderstaande code produceren net hetzelfde resultaat, maar de onderstaande code is dynamischer, de tekst "World" en "Universe" komen nu uit een TypeScript object.

Merk op dat alle geldige JavaScript code gebruikt kan worden tussen de accolades, in de eerste titel maken we gebruik van string concatenatie.
De code tussen de accolades kan eveneens een functie zijn die een string teruggeeft of nog iets compleet anders.

> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> const greeting = {
> greeting1: "World",
> greeting2: "Universe"
> }
>
> const element = (
> <div>
> <h1>Hello {greeting.greeting1 + "!"}</h1>
> <h1>Hello {greeting.greeting2}!</h1>
> </div>
> )
>
> root.render(
> element
> )
> ```
> </details>

Bovenstaande code werkt en rendered de gevraagde hoofdingen, maar we hebben een omringende <div> moeten toevoegen. Hier is niets mis mee, maar soms heb je een container nodig waaraan geen opmaak gebonden is (een <div> begint standaard een nieuwe lijn omdat het een block-element is), in dat geval je een fragment gebruiken.

> **ℹ️<strong> Begrip: Fragment</strong>**
>
> Een fragment is een container element dat enkel in de React code bestaat en geen effect heeft op de uiteindelijke HTML-code in het afgewerkte product. Een fragment wordt niet gerenderd.
>
> <details>
> <summary>Met div</summary>
>
> ```
> const element = (
> <div>
> <h1>Hello {greeting.greeting1 + "!"}</h1>
> <h1>Hello {greeting.greeting2}!</h1>
> </div>
> )
> ```
> </details>
> <details>
> <summary>Met fragment</summary>
>
> ```
> const element = (
> <>
> <h1>Hello {greeting.greeting1 + "!"}</h1>
> <h1>Hello {greeting.greeting2}!</h1>
> </>
> )
> ```
> </details>

## Componenten
React applicaties delen de UI op in kleine stukken of componenten.
Dit gebeurt van bovenaf naar onderaan. De bovenste component stelt een pagina voor, deze pagina bevat kleinere componenten die bijvoorbeeld een navigatiebalk, side-menu en content component bevatten. De navigatiebalk is op zijn beurt ingedeeld in een titel, navigatie en login-form component. Deze componenten kunnen op hun beurt weer ingedeeld worden in nog kleinere componenten.

Het doel van componenten is een herbruikbare, onderhoudbare UI.
Idealiter staat elke component op zich en kan deze in de rest van de website, of op een andere website, herbruikt worden. Een component is opgebouwd uit verschillende JSX-elementen.

> <strong>Begrip: Component</strong>
>
> Een component is een onderdeel van een React applicatie, één applicatie bestaat uit tientallen componenten. Een component staat op zich, kan herbruikt worden en gebruikt eventueel andere componenten.
> 
> ![Figuur 3: React Componenten](../Lesinhoud/Figuur%203%20React%20Componenten.png)</br>
> *Figuur 3: React Componenten*
> 
> Bron: https://react.dev/learn/thinking-in-react

Een component is een onderdeel van een React applicatie, één applicatie bestaat uit tientallen componenten.
Een component staat op zich, kan herbruikt worden en gebruikt eventueel andere componenten.

### Componenten definiëren
Om een component te definiëren, gebruiken we een JavaScript functie. De enige vereisten voor deze functie zijn dat:

1. De functie een JSX-expressie teruggeeft
2. De functie een naam heeft die begint met een *hoofdletter*

Het "Hello World/Universe" voorbeeld kan eenvoudig als een component geschreven worden, dit betekent dat ook de render-methode aangepast moet worden zodat de nieuwe component gebruikt wordt.
Een component kan in een JSX-expressie opgeroepen worden alsof het een HTML-element is.

We gebruiken de FunctionComponent interface om aan te geven dat de HelloWorld variabele een FunctionComponent is, zo garanderen we dat we geldige TSX-code teruggeven en kunnen we later properties toevoegen.

> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import {FunctionComponent} from 'react';
>
> const HelloWorld: FunctionComponent = () => {
> const greeting = {
> greeting1: "World",
> greeting2: "Universe"
> }
>
>     return (
>         <>
>             <h1>Hello {greeting.greeting1 + "!"}</h1>
>             <h1>Hello {greeting.greeting2}!</h1>
>         </>
>     )
> }
>
> root.render(
> <HelloWorld/>
> )
> ```
>
> </details>

Tenslotte importeren we ook een door React aangereikte component, <StrictMode>.
Deze component kan gebruikt worden om extra controles op fouten uit te voeren tijdens het ontwikkelproces.
In een production build heeft deze component geen effect, verder is er aan deze component ook geen zichtbare UI gekoppeld, net zoals bij een fragment.

> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import {StrictMode} from 'react'
>
> // Niet relevante code weggelaten.
>
> root.render(
>   <StrictMode>
>       <HelloWorld/>
>   </StrictMode>
> )
> ```
>
> </details>

> **ℹ️<strong> Begrip: Functie component</strong>**
>
> Een functie component is een functie die één herbruikbaar onderdeel van de user interface definieert en JSX-code teruggeeft.
> De naam van zo'n functie begint steeds met een hoofdletter.
> Een functie component kan ergens anders in de code gebruikt worden als een HTML-element.
> 
> De interfaces FunctionComponent en FC, die door React aangeboden worden, zijn gelijk.
> De twee onderstaande voorbeelden zijn dan ook gelijkwaardig.
> 
> <details>
> <summary>FunctionComponent</summary>
>
> ```
> import {FunctionComponent} from 'react';
>
> const FunctionComponent: FunctionComponent = () => {
>   return (
>       <p>
>           Dit is een functie component,
>           de return waarde moet JSX-code zijn.
>       </p>
>   )
> }
>
> const exampleUsage = <FunctionComponent/>;
> ```
>
> </details>
> <details>
> <summary>FC</summary>
>
> ```
> import {FC} from 'react';
>
> const FunctionComponent: FC = () => {
>   return (
>       <p>
>           Dit is een functie component,
>           de return waarde moet JSX-code zijn.
>       </p>
>   )
> }
>
> const exampleUsage = <FunctionComponent/>;
> ```
> </details>

### Importeren en exporteren
We kunnen natuurlijk niet alle componenten in één .tsx bestand plaatsten, dit zorgt snel voor onnodig grote bestanden en slecht onderhoudbare code.
We zonderen componenten daarom af in individuele bestanden.

We kunnen vervolgens de component exporteren uit dit bestand en daarna terug importeren in een ander bestand.

> **ℹ️<strong> Begrip: Export & export default</strong>**
>
> In deze cursus gebruiken we voor componenten steeds een default export, dit wil zeggen dat de componenten geïmporteerd kunnen worden zonder accolades te moeten schrijven in het import-statement.
> Als we de default modifier weglaten, wordt de component nog steeds geëxporteerd, maar maakt deze deel uit van een JavaScript object. Om deze component te gebruiken moeten we dan accolades toevoegen aan het import-statement om aan te geven dat we één element uit een object importeren.
> Een bestand kan maximaal één default export hebben, maar kan meerdere niet default exports bevatten. De twee kunnen ook gecombineerd worden binnen één JavaScript bestand.
>
> <details>
> <summary>/src/helloWorld.tsx</summary>
>
> ```
> import {FunctionComponent} from 'react';
>
> export const HelloWorld: FunctionComponent = () => {
> const greeting = {
> greeting1: 'World',
> greeting2: 'Universe'
> }
>
>     return (
>         <>
>             <h1>Hello {greeting.greeting1 + '!'}</h1>
>             <h1>Hello {greeting.greeting2}!</h1>
>         </>
>     )
> }
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import ReactDOM from 'react-dom/client'
> import {StrictMode} from 'react'
> import ComputerScientistListV1 from './computerScientistListV1.tsx';
>
> const root = ReactDOM.createRoot(
>   document.getElementById('root') as HTMLElement
>   );
>
> root.render(
>   <StrictMode>
>       <ComputerScientistListV1/>        
>   </StrictMode>
> )
> ```
> </details>


### Properties
Stel we willen een lijst van enkele belangrijke grondleggers van de computerwetenschappen renderen.
De eenvoudigste optie is natuurlijk via een component waar al deze personen uitdrukkelijk uitgeschreven worden.
Deze nieuwe component moet natuurlijk ook opgeroepen worden in main.tsx.

> <details>
> <summary>/src/computerScientistListV1.tsx</summary>
>
> ```
> const ComputerScientistListV1: FunctionComponent = () => {
>    return (
>        <div>
>            <h1>Famous computer scientists</h1>
>            <ul>
>                <li>
>                    Charles Babbage (1791 - 1871):
>                    <p>Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine
>                        and built a prototype for a less powerful mechanical calculator.</p>
>                </li>
>                <li>
>                    Ada Lovelace (1815 - 1852):
>                    <p>An English mathematician and writer, chiefly known for her work on Charles
>                        Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first
>                        to recognize that the machine had applications beyond pure calculation, and created the first
>                        algorithm intended to be carried out by such a machine. As a result, she is often regarded as
>                        the first to recognize the full potential of a "computing machine" and the first computer
>                        programmer.</p>
>                </li>
>                <li>
>                    Alan Turing (1912 - 1954):
>                    <p>Made several fundamental contributions to theoretical computer science,
>                        including the Turing machine computational model, the conceiving of the stored program concept
>                        and the designing of the high-speed ACE design. Independently of Alonzo Church, he formulated
>                        the Church-Turing thesis and proved that first-order logic is undecidable. He also explored the
>                        philosophical issues concerning artificial intelligence, proposing what is now known as Turing
>                        test.</p>
>                </li>
>            </ul>
>        </div>
>    )
>}
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import ReactDOM from 'react-dom/client'
> import {StrictMode} from 'react'
> import ComputerScientistListV1 from './computerScientistListV1.tsx';
>
> const root = ReactDOM.createRoot(
>   document.getElementById('root') as HTMLElement
> );
>
> root.render(
>   <StrictMode>
>       <ComputerScientistListV1/>        
>   </StrictMode>
> )
> 
> ```
> </details>

Dit is echter helemaal niet efficient, elk element in de lijst heeft dezelfde structuur, zodra iets meerdere keren voorkomt in de applicatie is het best hier een aparte component van te maken.
Zelf als dit niet het geval is, kan je nog steeds een extra component gebruiken om de leesbaarheid te bevorderen.

We kunnen eenvoudig 3 componenten maken, één voor elk van 3 computerwetenschappers, dit is natuurlijk niet veel beter.
Een component moet herbruikbaar zijn, het is dus nodig om de naam en voornaam, het geboorte- en sterftejaar, en de bijdragen door te geven aan de nieuwe component. Hiervoor kunnen we properties gebruiken.

We definiëren een nieuwe component ComputerScientist die de eigenschappen van één bekende computerwetenschapper doorgegeven krijgt via de properties.
Properties (of props) is een JavaScript object dat informatie bevat die nodig is om de component correct te renderen, dit object wordt doorgegeven als parameter aan een component.

Om type checking, autocompletion en intellisense toe te voegen aan de component, definiëren we eerst een TypeScript interface die de properties bevat.
Vervolgens geven we deze interface door als generische parameter aan de FunctionComponent interface. Tenslotte gebruiken we deconstructing om de properties toe te kennen aan een variabele.

In dit geval maken we gebruik van de IComputerScientist interface.
Als een component meer properties nodig heeft dan diegene die rechtstreeks uit een model komen, dan kunnen we een extra interface bouwen en deze meegeven als parameter aan ComponentNameProps, in dit geval zou zo'n interface dus ComputerScientistProps heten.

> <details>
> <summary>/src/models/IComputerScientist.tsx</summary>
>
> ```
> interface IComputerScientist {
>   firstName: string
>   lastName: string
>   birth: number
>   death: number
>   accomplishments: string
> }
>
> export default IComputerScientist
> ```
> </details>
> <details>
> <summary>/src/computerScientist.tsx</summary>
>
> ```
> import IComputerScientist from './models/IComputerScientist.ts'
>   const ComputerScientist: FunctionComponent<IComputerScientist> = (props) => {
>       const {firstName, lastName, birth, death, accomplishments} = props
>       return (
>           <li>
>               {firstName} {lastName} ({birth} - {death}):
>               <p>{accomplishments}</p>
>           </li>
>      )
> }
> 
> ```
> </details>
> <details>
> <summary>/src/computerScientistListV2.tsx</summary>
>
> ```
> const ComputerScientistListV2: FunctionComponent = () => {
>   return (
>       <div>
>           <h1>Famous computer scientists</h1>
>           <ul>
>               <ComputerScientist
>                   firstName={'Charles'} lastName={'Babbage'}
>                   birth={1791} death={1871}
>                   accomplishments={'Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine and built a prototype for a less powerful mechanical calculator. '}
>               />
>
>                 <ComputerScientist
>                     firstName={'Ada'} lastName={'Lovelace'}
>                     birth={1814} death={1852}
>                     accomplishments={"An English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and created the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognize the full potential of a \"computing machine\" and the first computer programmer."}
>                 />
>
>                 <ComputerScientist
>                     firstName={'Alan'} lastName={'Turing'}
>                     birth={1912} death={1954}
>                     accomplishments={'Made several fundamental contributions to theoretical computer science, including the Turing machine computational model, the conceiving of the stored programs concept and the designing of the high-speed ACE design. Independently of Alonzo Church, he formulated the Church-Turing thesis and proved that first-order logic is undecidable. He also explored the philosophical issues concerning artificial intelligence, proposing what is now known as Turing test.'}
>                 />
>             </ul>
>         </div>
>     )
> }
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import ReactDOM from 'react-dom/client'
> import {StrictMode} from 'react'
> import ComputerScientistListV2 from './computerScientistListV2.tsx';
>
> const root = ReactDOM.createRoot(
>   document.getElementById('root') as HTMLElement
>   );
>
> root.render(
>   <StrictMode>     
>       <ComputerScientistListV2/>        
>   </StrictMode>
> )
> ```
> </details>

> <strong>Begrip: Properties</strong>
>
> De properties of props zijn beschikbaar op elke component en worden meegegeven via een parameter props in de functie die de component definieert.
> Deze parameter is steeds een JavaScript object. Via een TypeScript interface wordt gedefinieerd welke properties verwacht worden. 
> 
> In JSX-code kunnen properties doorgegeven worden als HTML-attributen.
> 
> ```
> import {FunctionComponent} from 'react';
> 
> interface ExampleComponentProps {
>   example: string;
> }
> 
> const ExampleComponent: FunctionComponent<ExampleComponentProps> = (props) => {
>   return <p>{props.example}</p>;
> }
> 
> const exampleUse = <FunctionComponent
>   example={'This is an example value for the property example.'}/>

### Lussen in JSX
In de meeste gevallen zal data, zoals de computerwetenschappers, geladen worden vanuit een API of database, en bewaard worden in een array.
We simuleren dit hieronder door een array met computerwetenschapper hard te coderen in onze code.

> <details>
> <summary>/src/data/computerScientist.ts</summary>
>
> ```
> import IComputerScientist from '../models/IComputerScientist.ts';
> 
> const computerScientists: IComputerScientist[] = [
>   {
>       firstName: 'Charles',
>       lastName: 'Babbage',
>       birth: 1791,
>       death: 1871,
>       accomplishments: 'Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine and built a prototype for a less powerful mechanical calculator. ',
>   },
>   {
>       firstName: 'Ada',
>       lastName: 'Lovelace',
>       birth: 1814,
>       death: 1852,
>       accomplishments: "An English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and created the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognize the full potential of a \"computing machine\" and the first computer programmer.",
>   },
>   {
>       firstName: 'Alan',
>       lastName: 'Turing',
>       birth: 1912,
>       death: 1954,
>       accomplishments: 'Made several fundamental contributions to theoretical computer science, including the Turing machine computational model, the conceiving of the stored programs concept and the designing of the high-speed ACE design. Independently of Alonzo Church, he formulated the Church-Turing thesis and proved that first-order logic is undecidable. He also explored the philosophical issues concerning artificial intelligence, proposing what is now known as Turing test.',
>   },
> ]
> 
> export default computerScientists
> ```
> </details>

Via een lus kunnen we door deze array itereren en de nodige componenten aanmaken, let op, dit moet gebeuren voor het return keyword.
Elk van de ComputerScientist componenten moet bewaard worden in een array die we vervolgens kunnen uitprinten in de JSX-code.

> <details>
> <summary>/src/computerScientistListV3.tsx</summary>
>
> ```
> interface Props {
> scientists: IComputerScientist[]
> }
>
> const ComputerScientistListV3: FunctionComponent<Props> = ({scientists}) => {
> const output = []
>
>     for (const scientist of scientists) {
>         output.push(
>             <ComputerScientist
>                 firstName={scientist.firstName} lastName={scientist.lastName}
>                 birth={scientist.birth} death={scientist.death}
>                 accomplishments={scientist.accomplishments}/>
>         )
>     }
>
>     return (
>         <div>
>             <h1>Famous computer scientists</h1>
>             <ul>
>                 {output}
>             </ul>
>         </div>
>     )
> }
> ```
> </details>

Bovenstaande code kan nog heel wat korter geschreven worden. De spread operator kopieert alle attributen van een object en behoudt dezelfde namen voor deze properties.
Voor een React component, worden de attributen van het object doorgegeven als properties aan de React component, opnieuw onder dezelfde naam. Onderstaande code produceert dus exact hetzelfde resultaat als die hierboven.

> <details>
> <summary>/src/computerScientistListV3.tsx</summary>
>
> ```
> interface Props {
> scientists: IComputerScientist[]
> }
>
> const ComputerScientistListV3: FunctionComponent<Props> = ({scientists}) => {
> const output = []
>
>     for (const scientist of scientists) {
>         output.push(<ComputerScientist {...scientist}/>);
>     }
>
>     return (
>         <div>
>             <h1>Famous computer scientists</h1>
>             <ul>
>                 {output}
>             </ul>
>         </div>
>     )
> }
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import ReactDOM from 'react-dom/client'
> import {StrictMode} from 'react'
> import ComputerScientistListV3 from './computerScientistListV3.tsx';
> import computerScientists from './data/computerScientists.ts';
>
> const root = ReactDOM.createRoot(
>   document.getElementById('root') as HTMLElement
> );
>
>root.render(
>   <StrictMode>     
>       <ComputerScientistListV3 scientists={computerScientists}/>        
>   </StrictMode>
> )
> ```
> </details>



### Geneste JSX-code
Elke functiecomponent kan gebruikt worden als zelfsluitend HTML-element.
Dit is niet altijd voldoende, in sommige gevallen is het nodig om kinderen te definiëren voor een functiecomponent.

Stel, we willen een lijst van letters uitprinten, elke letter krijgt dezelfde opmaak. De component **LetterAlternative1** zorgt dus enkel voor de opmaak van de letter en voegt verder niets toe.
Als de hoeveelheid kinderen van zo'n component groot wordt, is het onmogelijk om alles via standaard properties door te geven en overzichtelijke en leesbare code te schrijven.
We kunnen de *PropsWithChildren* interface gebruiken om de children property toe te voegen aan de properties van een component.
Of, we kunnen deze eventueel ook zelf definiëren in de bijhorende properties interface, gebruik in dat geval het *ReactNode* datatype.

> <details>
> <summary>/src/letterAlternative1.tsx</summary>
>
> ```
> import {FunctionComponent, PropsWithChildren} from 'react';
> 
> const LetterAlternative1: FunctionComponent<PropsWithChildren> = ({children}) => {
>   return (
>       <div>
>           {/* Render de kinderen van deze component.*/}
>           {children}
>       </div>
>   )
> }
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> root.render(
>   <StrictMode>
>       {/* A is een kind van de component LetterAlternative1*/}
>       <LetterAlternative1>A</LetterAlternative1>
>       <LetterAlternative1>E</LetterAlternative1>
>       <LetterAlternative1>I</LetterAlternative1>
>       <LetterAlternative1>O</LetterAlternative1>
>       <LetterAlternative1>U</LetterAlternative1>
>   </StrictMode>
> )
> ```
> </details>


Als we *LetterAlternative1* schrijven zonder children te gebruiken in de JSX-code, werkt de code niet en wordt er niets getoond.

## CSS
CSS kan op een aantal verschillende manieren toegevoegd worden aan een React applicatie.
Natuurlijk kan een stylesheet (.css bestand) nog steeds gekoppeld worden aan de applicatie.
Daarnaast kunnen we de CSS-code ook bij in een component plaatsen.

### CSS via stylesheets
De eerste optie is de meest eenvoudige, we plaatsen een CSS-bestand in een map assets in de src directory.
Het is belangrijk om stylesheets in de src map te plaatsen, zo worden deze geminimaliseerd tijdens het maken van een production build en worden eventuele ongebruikte lijnen verwijderd.
We voegen onderstaande code toe in main.css en importeren dit in main.tsx.

> <details>
> <summary>/src/assets/main.css</summary>
>
> ```
> .letter {
>   padding: 10px;
>   margin: 10px;
>   background-color: #ffde00;
>   color: #333;
>   display: inline-block;
>   font-family: monospace;
>   font-size: 32px;
>   text-align: center;
> }
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> import './assets/main.css';
> ```
> </details>

De CSS-code verwacht een klasse, deze toevoegen aan de component LetterAlternative1 is niet bijzonder moeilijk.
Het is wel belangrijk om op te merken dat we attribuut class niet kunnen gebruiken, dit is namelijk een keyword in JavaScript.
React gebruikt het attribuut className om een CSS-klasse mee te geven in JSX-code.

> <details>
> <summary>/src/letterAlternative1.tsx</summary>
>
> ```
> const LetterAlternative1: FunctionComponent<LetterProps> = ({children}) => {
>   return (
>       <div className={'letter'}>
>           {children}
>       </div>
>   )
> }
> ```
> </details>


## CSS in JavaScript
Het HTML-attribuut style kan gebruikt worden om inline CSS toe te voegen, in React kan dit ook.
Het enige verschil is dat we in JSX-code gebruik moeten maken van een JavaScript object om de stijl toe te voegen, in plaats van een puntkomma-seperated string in HTML.
Dit object heeft het type CSSProperties.

Een belangrijke opmerking is dat CSS-eigenschappen niet rechtstreeks vertaald kunnen worden naar JavaScript.
Een attribuut als font-family wordt fontFamily, background-color wordt backgroundColor, ...

Als we de CSS in de componenten schrijven, kunnen we properties gebruiken om bepaalde eigenschappen te overschrijven, zoals gedemonstreerd in onderstaand voorbeeld.

Merk op dat we de PropsWithChildren interface dit keer niet rechtstreeks doorgegeven hebben aan de FunctionComponent interface, maar dat we overerving gebruikt hebben om de children property toe te voegen aan de LetterAlternative2Props interface.

Verder hebben we ook een vraagteken gebruikt om aan te geven dat de property bgColor optioneel is, aangezien deze property optioneel is, controleren we op lijn 12, via de nullish coalescing operator, of we al dan niet gebruik moeten maken van de default waarde.


> <details>
> <summary>/src/letterAlternative2.tsx</summary>
>
> ```
> interface LetterAlternative2Props extends PropsWithChildren {
>   bgColor?: string
> }
> 
> const LetterAlternative2: FunctionComponent<LetterAlternative2Props> = (props) => {
>   const {children, bgColor} = props
>
>     const letterStyle: CSSProperties = {
>         padding: 10,
>         margin: 10,
>         backgroundColor: bgColor ?? '#ffdeEE',
>         color: '#333',
>         display: 'inline-block',
>         fontFamily: 'monospace',
>         fontSize: 32,
>         textAlign: 'center',
>     }
>
>     return (
>         <div style={letterStyle}>
>             {children}
>         </div>
>     )
> }
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> root.render(
>     <StrictMode>
>         <LetterAlternative2 bgColor="#FFF">A</LetterAlternative2>
>         <LetterAlternative2>E</LetterAlternative2>
>         <LetterAlternative2>I</LetterAlternative2>
>         <LetterAlternative2>O</LetterAlternative2>
>         <LetterAlternative2>U</LetterAlternative2>
>     </StrictMode>
> )
> ```
> </details>

### Styled Components
De styled-components bibliotheek kan gebruikt worden om klassieke CSS-code te schrijven in een JavaScript file.
Dit stelt ons in staat om CSS-properties als font-family te gebruiken onder de echte naam en zonder quotes te moeten plaatsen.
We installeren dit pakket met onderstaand commando.

```
pnpm add styled-components
```

De bibliotheek wordt gebruikt om een nieuwe React component te genereren die niets anders bevat dan een HTML5-element met toegevoegde styling.
Let op het teken op lijn 3 en 12, dit is een backtick geen single-quote.

> <details>
> <summary>/src/letterAlternative32.tsx</summary>
>
> ```
> import styled from 'styled-components'
>
> const LetterContainer = styled.div`
>   padding: 10px;
>   margin: 10px;
>   background-color: #ffde55;
>   color: #333;
>   display: inline-block;
>   font-family: monospace;
>   font-size: 32px;
>   text-align: center;
> `
>
> const LetterAlternative3: FunctionComponent<PropsWithChildren> = ({children}) => {
>   return (
>       <LetterContainer>
>           {children}
>       </LetterContainer>
>   )
> }
> ```
> </details>
> <details>
> <summary>/src/main.tsx</summary>
>
> ```
> root.render(
>     <StrictMode>
>         <LetterAlternative3>A</LetterAlternative3>
>         <LetterAlternative3>E</LetterAlternative3>
>         <LetterAlternative3>I</LetterAlternative3>
>         <LetterAlternative3>O</LetterAlternative3>
>         <LetterAlternative3>U</LetterAlternative3>
>     </StrictMode>
> )
> ```
> </details>

## Appendix
Indien je graag exact dezelfde stijlregels gebruikt in jouw code als in de voorbeelden, dan kan je de inhoud van het bestand .eslintrc.cjs vervangen met het volgend, of je kan onze stijlregels rechtstreeks downloaden op GitPub.

> <details>
> <summary>/.eslintrc.cjs</summary>
>
> ```
> module.exports = {
>     env: {browser: true, es2020: true},
>     extends: [
>         'eslint:recommended',
>         'plugin:@typescript-eslint/recommended',
>         'plugin:react-hooks/recommended'
>     ],
>     parser: '@typescript-eslint/parser',
>     parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
>     plugins: ['react-refresh'],
>     rules: {
>             'react-refresh/only-export-components': 'warn',
>             'quotes': [
>             'error',
>             'single',
>             {
>                 'avoidEscape': true,
>                 'allowTemplateLiterals': true
>             }
>         ],
>         'comma-dangle': [
>             'error',
>             {
>                 'arrays': 'always-multiline',
>                 'objects': 'always-multiline',
>                 'imports': 'always-multiline',
>                 'exports': 'always-multiline',
>                 'functions': 'always-multiline'
>             }
>         ],
>         'semi': [
>             'error',
>             'never'
>         ],
>         '@typescript-eslint/member-delimiter-style': [
>             'error',
>             {
>                 'multiline': {
>                     'delimiter': 'none',
>                     'requireLast': true
>                 },
>                 'singleline': {
>                     'delimiter': 'comma',
>                     'requireLast': false
>                 },
>                 'multilineDetection': 'brackets'
>             }
>         ]
>     }
> }
> ```
> </details>



