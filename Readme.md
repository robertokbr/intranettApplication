<h1 align="center">
  <img src="https://github.com/robertokbr/WorkManager/blob/master/.Github/logo.svg" width="170px" /><br>
  <br>
<a href="https://workmanager.1thcode.com">WorkManager</a>
</h1>

### Web application to organize your Team activities, by providing a simple dashboard that allows you to create tasks and manage Different kinds of accounts.
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/robertokbr/WorkManager.svg">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/robertokbr/WorkManager.svg">
  <a href="https://www.codacy.com/app/robertokbr/WorkManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=robertokbr/WorkManager&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/1b577a07dda843aba09f4bc55d1af8fc.svg">
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/robertokbr/WorkManager.svg">
  <a href="https://github.com/robertokbr/WorkManager/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/robertokbr/WorkManager.svg">
  </a>
  <a href="https://github.com/robertokbr/WorkManager/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/robertokbr/WorkManager.svg">
  </a>
</p>
<img src="https://github.com/robertokbr/WorkManager/blob/master/.Github/WorkManager.gif" width="100%" >

## User Histories
  * Activity properties:
    - Title 
    - Initial time 
    - Time of finish
    - Time of cancelation
    - Cancelation reason
    - Detail 
  * Account types
    - User
    - Manager
  * User account permissions:
    - Create tasks
    - Finish or cancel task
  * Manager  permissions:
    - Create team
    - Watch team tasks
    - Sort tasks by type: ```In progress```, ```Done``` & ```Canceled```
  

## 💻 Techs
- Typescript -
- [NodeJs](https://nodejs.org/en/) - Build the server
- [ReactJs](https://reactjs.org) - A JavaScript library for building user interfaces
- [Postgres]() - Database
- [SQLite3](https://www.sqlite.org) - Optional Database
- [Express](https://expressjs.com/) - Router of the Application
- [Typeorm]() - ORM
- [CORS](https://www.npmjs.com/package/cors) - Cross-origin Resource Sharing
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and NodeJs
- React-spring - 
- Docker
- JWT
- Styled-components


## 🕹 How To Use - Frontend application

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/robertokbr/workmanager-web

# Go into the repository
$ cd workmanager-web

# Install dependencies
$ yarn 

# Change the api url in the services to localhost:3333

# Run the app
$ yarn start
```


## 🕹 How To Use - Backend application


```bash
# Clone this repository
$ git clone https://github.com/robertokbr/workmanager-api

# Go into the repository
$ cd workmanager-api

# Install dependencies
$ yarn 
```
---

## How to Run Postgres Database on Docker

* [Install Docker](https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2)

```bash
# Create a Postgres Image
$ docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:54
32 -d postgres
```

## Docker Alternative
* ``OBS``: If you dont wanna run the database at Docker, and you preferer a simple alternative  I recommend you to change the database to Sqlite3, for this you have to:
```bash
# Install Sqlite3
$ yarn add sqlite3 
```
* Copy and paste it in the ormConfig.json:
```
{
  "name": "default",
  "type": "sqlite",
  "database": "./src/database/db.sqlite3",
  "autoSchemaSync": true,
  "entities": [
    "src/models/*.ts"
  ],
  "logging": {
    "logQueries": true
  },

  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/models",
    "migrationsDir": "./src/database/migrations"
  }
}

```

## How to Run the Server:
```bash
# Run migrations to create the database estructure
$ yarn typeorm migration:run

# Run localhost server
$ yarn dev:server
```
---


## 🧪 Features to Add
* Copy task to proper workflow
* Update task content
* To file task
* Add task tags
* Add task icon
* Add team user by id
* Short user list in the dashboard


## 🔧 Bug to Fix
* Fix table overflow when the task content break the height
* Fix modal task when the task content break the height


## 📄 Updates
* 16/02/2021  
  - Frontend: Fix redirect when token expires 
  - Frontend: Add Custom avatar   

* 18/02/2021
  - Frontend: Add useData hook to manage all application data inside the context and avoid multiple API calls
  - Backend: Validate user create with a username already in use
  - Frontend: Add team list overview: User tasks number by status  

<img src="https://github.com/robertokbr/WorkManager/blob/master/.Github/feature-tasknumber.png" width="100%" >

## 🏗 How to contribute

- Fork the [backend](https://github.com/robertokbr/workmanager-api) or [frontend](https://github.com/robertokbr/workmanager-web) repo;
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your change: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`

---

Made by Roberto Junior :wave: [Join me on Linkedin!](https://www.linkedin.com/in/robertojrcdc/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint


