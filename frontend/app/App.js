/**
 * Entry point
 */

// Import styles
import './assets/styles/style.scss';

/**
 * Simple example code
 */

// Get main DIV
const mainElt = document.getElementById('main');

// Create dynamic DIV
const dynElt = document.createElement('div');

// Add text in dynamic DIV
dynElt.innerHTML = 'Dynamic element';

// Append dynamic DIV in main DIV
mainElt.appendChild(dynElt);
