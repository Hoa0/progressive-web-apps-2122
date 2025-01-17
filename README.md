# Progressive Web Apps @cmda-minor-web · 2021/22

Project link: [Rijksmuseum PWA](https://rijksmuseum-pwa.herokuapp.com)

## Table of Contents

- [Description](#description)
- [User story](#userstory)
- [API](#api)
- [Activity Diagram](#ActivityDiagram)
- [Goals](#goals)
- [Installation](#Installation)
- [Backlog](#backlog)

## Description

Progressive Web App.

- Create a Single page application
- Implemented a usefull Service Worker

## User Story

> As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown Rijksmuseum - RijksData API

## API

For this project I use an API from [Rijks Data](https://data.rijksmuseum.nl/object-metadata/api/)

## Activity Diagram

<img src="https://github.com/Hoa0/progressive-web-apps-2122/blob/main/static/images/Activity-Diagram.png" width="800">

## Goals

After finishing this program you can:

- _deal with server side rendering;_
- _implement a Service Worker;_
- _enhance the critical render path for a better runtime or percieved performance._

## Installation

Clone this project

```commandline
git clone https://github.com/Hoa0/progressive-web-apps-2122.git
```

Install all packages

```commandline
npm install
```

Start project

```commandline
npm start
```

## Backlog

- [x] Detailpage - render different data from api
- [x] Search
- [x] Detailpage - Back to home
- [x] Install service worker
- [x] Offline fallback page by using service worker
- [ ] Detailpage - add styling
- [ ] Setup hosting
- [ ] Placeholder text for when image or text returns empty from API
- [ ] Optimize the performance
- [ ] Readme
  - User Story
  - Activity Diagram
  - API

## License

[MIT License](https://github.com/Hoa0/progressive-web-apps-2122/blob/main/LICENSE)
