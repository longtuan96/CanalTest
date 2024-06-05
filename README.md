# **The Movie Plus**

[![Netlify Status](https://api.netlify.com/api/v1/badges/dd9b7846-44a2-422d-99a1-d9dc8de644f4/deploy-status)](https://app.netlify.com/sites/mymovieplus/deploys)
![coverage](https://img.shields.io/badge/coverage-~90%25-green?style=flat&logo=react&logoColor=00d7dd)
![Nodev](https://img.shields.io/badge/Node-v18.19.1-green?style=flat)

[View Demo](https://mymovieplus.netlify.app/)

The Movie Plus is my webpage in media domain. this page focus on FrontEnd only . All Data is fetched from theMovieDB API.

## Table of Contents

- [**The Movie Plus**](#the-movie-plus)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technical Features](#technical-features)
  - [Tech](#tech)
  - [Roadmap](#roadmap)
  - [Folder Structure](#folder-structure)
  - [Development](#development)
    - [Install the dependencies and devDependencies.](#install-the-dependencies-and-devdependencies)
    - [and start the server](#and-start-the-server)
  - [Storybook](#storybook)
    - [To start the Storybook UI](#to-start-the-storybook-ui)

## Features

- View Popoular movies at the Home page.
- Search for you favorite films with the search button everywhere in the sites.
- Navbar always on top for easy access.
- Movie Detail can be viewed by chosing a movie in the list.
- Trailer can be watched in Detail page and Home page
- support responsive to small screen.

## Technical Features

- Storybook config for the components.
- All typed, no any
- used React Query with constants Keys
- Used Zod for resquest and response validation
- tsConfig, eslint and prettier configured for best practices and code style consistency.

## Tech

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Vite](https://img.shields.io/badge/vite-00a0dd?style=for-the-badge&logo=vite&logoColor=00d7dd)
- ![Storybook](https://img.shields.io/badge/Storybook-dd00a0?style=for-the-badge&logo=storybook)
- ![Vitest](https://img.shields.io/badge/Vitest-00a0dd?style=for-the-badge&logo=vitest&logoColor=00d7dd)
- ![ZOD](https://img.shields.io/badge/Zod-A6F2D4?style=for-the-badge&logo=zod&logoColor=8134DF)

## Roadmap

- [x] The Carousel
- [x] The Movie and People Card
- [x] The Horizontal List
- [x] Get Mock data and create Types
- [x] Home page
- [x] Detail Page
- [x] Search Page
- [x] API Integration
- [x] Storybook for the components
- [x] Unit Test
- [ ] Tv shows Page
- [ ] Category page

## Folder Structure

- assets: image, icons for the application
- components: general components including common components and styled components
  - \*.ts : Define logic and styling for the components
  - \*.test.ts: Unit test file
  - \*.stories.tsx: storybook for the components
- constants: shared constant
- hooks: custom hooks
- layouts: the wrapper / placement frame for UI
- pages: the pages match with a route
- services: define the api services.
  - \*.ts: define the logic of the api services
  - \*.mock.ts: mock data
  - \*.type.ts: define types
- utils: share helper functions
- routes.tsx: routes file for react router

## Development

The Movie plus requires [Node.js](https://nodejs.org/) **v20+** to start on local.

### Install the dependencies and devDependencies.

```sh
npm i
```

### and start the server

```sh
npm run dev
```

## Storybook

All the components are logs in the storybook

### To start the Storybook UI

```sh
npm run storybook
```
