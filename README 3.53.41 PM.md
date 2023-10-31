# k8s pwa text editor

## Description
Check out my text editor application that runs in the browser, and can also function offline. 

[Heroku] (ADD LINK TO HEROKU DEPLOYMENT HERE)

[github](https://github.com/k8sterchi/k8s-pwa-text-editor)

My application incorporates multiple data persistence techniques to ensure redundancy in case a particular option is not supported by the user's browser. 

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Resources](#resources)
- [License](#license)

## User Story
AS A developer

I WANT to create notes or code snippets with or without an internet connection

SO THAT I can reliably retrieve them for later use

## Acceptance Criteria
GIVEN a text editor web application

WHEN I open my application in my editor

THEN I should see a client server folder structure

WHEN I run `npm run start` from the root directory

THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal

THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins

THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application

THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor

THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window

THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it

THEN I find that the content in the text editor has been retrieved from our IndexedDB

WHEN I click on the Install button

THEN I download my web application as an icon on my desktop

WHEN I load my web application

THEN I should have a registered service worker using workbox

WHEN I register a service worker

THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

WHEN I deploy to Heroku

THEN I should have proper build scripts for a webpack application

## Preview
![preview of application](./client/src/images/logo.png)

(this is just a placeholder image until i can get it working...)
## Resources
Re-watching all the class material and borrowing code snipets from previous lessons. 

## License
![License](https://img.shields.io/badge/License-MIT%20License-brightgreen)  
[License](./LICENSE)
This application is covered under the [MIT License](./LICENSE) license.