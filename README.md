# Text Editor

A progressive web application (PWA) that allows users to create and save text documents. The application works both online and offline, using IndexedDB for local storage and a service worker for caching static assets.

## Features

- Create and edit text documents
- Automatic saving of content using IndexedDB
- Offline functionality for accessing and editing documents without an internet connection
- Caching of static assets for improved performance

## Demo

[Live Demo](https://your-app-url.com)

## Installation

1. Clone the repository using the command:
   
- git clone https://github.com/nstepper/19-alchemy.git

2. Navigate to the root of the directory and install dependicies using the command:

- npm install 

3. Now you can build the application using the command:

- npx webpack --mode production

4. The application can now be started using the command:

- npx webpack serve --mode production

5. Once it has been started you can visit it by pasting this link in your browser:

http://localhost:3000

## Technologies Used 

- HTML
- CSS
- JavaScript
- IndexedDB
- Service Worker
- Webpack

## License

This project is licensed under the MIT License