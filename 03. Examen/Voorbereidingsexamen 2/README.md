# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Mapstructuur Testing

```
.
├── deel_2_testing
│   ├── cypress
│   │   ├── fixtures
│   │   │   └── example.json
│   │   ├── screenshots
│   │   │   └── spec.cy.js
│   │   │      └── Demo spec -- It crashes (failed).png
│   │	├── support
│   │	│   ├── commands.js
│   │	│   ├── component.js
│   │   │   ├── component-index.html
│   │	│   ├── e2e.js
│   │	│   └── index.ts
│   │   ├── videos 
│   │   │   └── spec.cy.js.mp4
│   │   └── public
│   │       └── vite.svg
│   ├── src
│   │   ├── api
│   │   │   ├── NIET_OPENEN_WORD_GEBRUIKT_DOOR_DE_API_FILES
│   │	│   │   ├── databaseSimulation.ts
│   │	│   │   ├── generateData.ts
│   │	│   ├── projectsApi.ts
│   │	│   ├── repositoriesApi.ts
│   │	│   └── userApi.ts
│   │	├── assets
│   │	│	└── react.svg
│   │	├── context
│   │	│	└── userContext.jsx
│   │	├── navigation
│   │	│	└── navigation.jsx
│   │	├── pages
│   │	│   ├── my-repositories
│   │	│   │   ├── detail
│   │	│   │   │   ├── branch.jsx
│   │	│   │   │   ├── commit.jsx
│   │	│   │   │   ├── commitDetail.jsx
│   │	│   │   │   ├── newCommitForm.jsx
│   │	│   │   │   └── repositoryDetail.jsx
│   │	│   │   ├── myRepositories.jsx
│   │	│   │   ├── newRepoModel.jsx
│   │	│   │   ├── repository.jsx
│   │	│   │   └── repositoryList.jsx
│   │	└── utils
│   │      ├── loadingPage.jsx
│   │      ├── loadingPart.jsx
│   │      └── user.jsx
│   ├── app.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── routing.jsx
│   └── userApi.jsx
├── .gitignore
├── cypress.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.js
├── workaround-cypress-process-issue.js