import { Workbox } from 'workbox-window';
import Editor from './editor';
import { getDb, putDb } from './database'; // Import getDb and putDb
import '../css/style.css';

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

// Load stored data from IndexedDB when the app starts
window.addEventListener('load', async () => {
  const storedContent = await getDb();
  if (editor && storedContent) {
    editor.setText(storedContent); // Set the editor's text to the stored content
  } else {
    loadSpinner();
  }
});

// Save data to IndexedDB when the window is unfocused
window.addEventListener('blur', async () => {
  const content = editor.getText(); // Assuming the Editor class has a method to get text
  await putDb(content);
});

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
