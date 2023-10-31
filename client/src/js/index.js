import { initdb, addItem, getItem } from './database';
import { Workbox } from 'workbox-window';
import Editor from './editor';
import '../css/style.css';

// Initialize the database when the app starts
(async () => {
  try {
    await initdb();

    const main = document.querySelector('#main');
    main.innerHTML = '';

    const loadSpinner = () => {
      const spinner = document.createElement('div');
      spinner.classList.add('spinner');
      spinner.innerHTML = `
        <div class="loading-container">
          <div class="loading-spinner" />
        </div>
      `;
      main.appendChild(spinner);
    };

    const editor = new Editor();

    if (typeof editor === 'undefined') {
      loadSpinner();
    }

    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      // Register the Workbox service worker
      const workboxSW = new Workbox('/service-worker.js');
      await workboxSW.register();
    } else {
      console.error('Service workers are not supported in this browser.');
    }
  } catch (error) {
    console.error('Failed to initialize the database:', error);
  }
})();

// Save content to IndexedDB when the user clicks off the DOM window
document.addEventListener('click', async () => {
  const content = document.getElementById('editor').value; // Replace with editor element.

  try {
    // Call the 'addItem' function to save the content to IndexedDB.
    await addItem(content);
    console.log('Content saved to IndexedDB');
  } catch (error) {
    console.error('Error saving content:', error);
  }
});

// Retrieve content from IndexedDB when the page loads
window.addEventListener('load', async () => {
  try {
    // Call the 'getItem' function to retrieve content from IndexedDB.
    const content = await getItem();
    if (content) {
      // If content is retrieved, set it in editor element.
      document.getElementById('editor').value = content; // Replace with editor element.
    }
  } catch (error) {
    console.error('Error retrieving content:', error);
  }
});