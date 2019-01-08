---
author: "Dima Feoktistov"
title: "Tomsk Map"
date: "08/01/2019"
category: "projects"
tags:
    - programming
    - Tomsk
    - google maps
---

# Tomsk map

This project is last project of Udacity FEND.

I created this project as my fгrst steps of studying React.js. It's a simple front-end
web application that uses Google Maps API to render list of POI's at Tomsk city. The information
for the places was provided by [Foursquare API](https://developer.foursquare.com/places-api).

This project is bootstraped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

* [Features](#features)
* [Setting up development](#setting-up-development)
* [Making production build](#making-production-build)
* [Live Preview](#live-preview)
* [Dependencies](#dependencies)

## Features

The content is responsive. The project uses axios to handle interactions with third party API's.
I handle asynchronous errors with ErrorBoundry component and catch functions in promises. User can filter
lList of places by their name.

## Setting up development

Clone the project and install all dependencies with npm or yarn

```bash
git clone https://github.com/dimafeoktistov/udacity-neibourhood-map.git
cd udacity-neibourhood-map
npm i
```

When you finish the installation, you can run `npm start` and navigate to `localhost:3000`.

## Making production build

Use this in case you don't want to check out [live](https://udacity-neibourhood-map.firebaseapp.com) version of web-app and you want to check offline app behavior, because service worker is off in development build, see all changes in real-time.

To make a production build run `npm run build` and then `serve -s build`.

## Live Preview

Click [here](https://udacity-neibourhood-map.firebaseapp.com) to try and use app online.

## Dependencies

All dependencies is in package.json, but here is the links to them.

* [axios](https://www.npmjs.com/package/axios).
* [escape-string-regexp](https://www.npmjs.com/package/@types/escape-string-regexp).
* [react](https://www.npmjs.com/package/react).
* [react-dom](https://www.npmjs.com/package/react-dom).
* [react-google-maps](https://www.npmjs.com/package/react-google-maps).
* [react-icons](https://www.npmjs.com/package/react-icons).
* [react-motion-drawer](https://www.npmjs.com/package/react-motion-drawer).
* [react-scripts](https://www.npmjs.com/package/react-scripts).
* [recompose](https://www.npmjs.com/package/recompose).