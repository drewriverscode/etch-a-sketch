// App State
let gridSize = 16;
let currentColor = '#39ff14';
let isDrawing = false;
let isEraser = false;

// Neon color palette
const neonColors = [
    {name: 'Green', value: '#39ff14'},
    {name: 'Magenta', value: '#ff00ff'},
    {name: 'Yellow', value: '#ffff00'},
    {name: 'Purple', value: '#9d00ff'},
]

// DOM Elements
const colorGrid = document.getElementById('colorGrid');
const drawingGrid = document.getElementById('drawingGrid');
const drawBtn = document.getElementById('drawBtn');
const eraseBtn = document.getElementById('eraseBtn');
const resizeBtn = document.getElementById('resizeBtn');
const clearBtn = document.getElementById('clearBtn');

// Initialize color palette: create color buttons and set up event listeners




// Select color: update current color and button states
// Initialize grid: create grid cells and set up event listeners
// Paint cell: apply current color or erase
// Drawing state: track mouse state for drawing
// Mode buttons: Draw and Erase
// Clear button: reset grid
// Resize button: prompt for new size and reinitialize grid
// Initialize app