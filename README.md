# Summer 2021 internship assignment

# Description

This is very simple fullstack platform built with Reactjs, Express and mongodb.

## Features

This app is an extended version of parts of wolt's 2021 preliminary [assignment](https://github.com/woltapp/summer2021-internship) requirements

## Live demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/e4915388-d53d-45bb-8ec2-a4d0bf0a6f79/deploy-status)](https://app.netlify.com/sites/woldrag/deploys)

A [backend ](https://wolt-app.herokuapp.com) and [frontend](https://woldrag.netlify.app) live demos of the app are hosted on Heroku and netflify respectively.

_Due to demo reasons and Heroku free terms, if an app receives no web traffic in a 30-minute period, it will sleep. Therefore, during the first launch, the application may take longer to load than usual, approximately 15 - 20 seconds. So please be patient and wait for the app to launch. Subsequent launches will be relatively fast._

## Technology stack

> ### FrontEnd
>
> - React
> - React Hooks
> - React router
> - Netflify hosting
>   <br>

> ### BackEnd
>
> - Node
> - Express
> - Heroku hosting
>   <br>

## Usage

Clone this repository to the desired location

```Shell
git clone git@github.com:woltapp/wolt_discovery_app.git
```

<br>

### Env Variables

Create a .env file in the root and add the following

```
PORT = 3001
REACT_APP_API_KEY = google api key

```

### Install Dependencies (frontend & backend)

```

cd frontend
npm install

```

backend

```
cd backend
npm install

```

### Run

```
# Run backend only
cd backend
npm run start
```

```

# Run frontend only
cd frontend
npm run start
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

## Demos

<p align="center" >
<img src="/frontend/src/img/Wolt-Discovery.png">
<br><br>
<img src="/frontend/src/img/Wolt-Discovery2.png">
</p>

### Contributing

Contributions are highly appreciated. In general, I follow the "fork-and-pull" Git workflow.

1. **Fork** this repo
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. **Submit** a Pull request so that I can review your changes

**NOTE:** Be sure to merge the latest from "upstream" before making a pull request!

### License

MIT license
