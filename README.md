<h1 align="center">
    <img alt="BeTheHero" title="#bethehero" src="https://github.com/jonathanccardoso/semana-omnistack-11/blob/master/.github/bethehero.svg" width="200px" />
</h1>

<h4 align="center">
  🚀 Project developed in the week Omnistack 11
</h4>
<br>

## :rocket: Technology

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)

## 💻 Project

BeTheHero is a project that aims to connect people who wish to make monetary contributions to NGOs (non-governmental organizations) that need help.

### Test

#### Test on frontend

- `yarn eject` // to generate scripts

* Install packages

  - `yarn add enzyme`
  - `yarn add react-test-renderer` // tests not run on dom
  - `yarn add enzyme-adapter-react-16`
  - `yarn add -D @testing-library/react`

* Create folder **tests**

<!--
  in package.json on 'jest'
  written
  "roots": [
  "<rootDir>"
  ],

  written
  <rootDir>/**tests**/\*_/?(_.)(spec|test).js(x} on "testMatch"

  before it, is configurate on setupFiles writer
  <rootDir>/**tests**/setup.js
  and create it file
-->

- Running tests
  - `yarn test`

### Mobx on ReactJS

Install dependecies

- `yarn add mobx`
- `yarn add mobx-react`
- `yarn add --dev @babel/plugin-proposal-decorators`

[MobX Docs](https://mobx.js.org/best/actions.html)
[Medium](https://medium.com/@caiovaccaro/react-mobx-li%C3%A7%C3%B5es-aprendidas-656b5232dec)

- observable
- observer
- action

### Configurations on vscode

```json
"editor.tabSize": 2,
"emmet.triggerExpansionOnTab": true,
"emmet.syntaxProfiles": {"javascript":"jsx"},
"emmet.includeLanguages": {"javascript":"javascriptreact"},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
