
const boxesSection = document.getElementById('boxesSection');
const codeOutput = document.getElementById('codeOutput');
const generateCodeBtn = document.getElementById('generateCodeBtn');
const addBoxBtn = document.getElementById('addBoxBtn');
const colorPicker = document.getElementById('colorPicker');
let boxCounter = 0;

// Function to create a new box
function createBox(color) {
    boxCounter++;
    const box = document.createElement('div');
    box.className = 'box';
    box.style.backgroundColor = color;

    // Center the box in the designing area
    const relaDiv = document.querySelector('.relaDiv');
    const centerX = (relaDiv.clientWidth - (relaDiv.clientWidth * 0.1)) / 2; // Center horizontally
    const centerY = (relaDiv.clientHeight - (relaDiv.clientHeight * 0.1)) / 2; // Center vertically
    box.style.left = `${centerX}px`;
    box.style.top = `${centerY}px`;

    // Add resize handles
    addResizeHandles(box);

    // Add click event to box for editing color
    box.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the box
        const newColor = colorPicker.value; // Use the color from the color picker
        box.style.backgroundColor = newColor; // Set the box color directly without prompt
    });

    boxesSection.appendChild(box);
}

// Function to add resize handles to a box
function addResizeHandles(box) {
    const handles = ['nw', 'ne', 'sw', 'se'];
    handles.forEach(handle => {
        const resizeHandle = document.createElement('div');
        resizeHandle.className = `resize-handle ${handle}`;
        box.appendChild(resizeHandle);
        makeResizable(box, resizeHandle, handle);
    });
}

// Function to make a box resizable
function makeResizable(box, handle, direction) {
    let startX, startY, startWidth, startHeight, startLeft, startTop;

    handle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(document.defaultView.getComputedStyle(box).width, 10);
        startHeight = parseInt(document.defaultView.getComputedStyle(box).height, 10);
        startLeft = box.offsetLeft; // Get initial left position
        startTop = box.offsetTop; // Get initial top position

        document.documentElement.addEventListener('mousemove', resize);
        document.documentElement.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        let newWidth = startWidth;
        let newHeight = startHeight;

        if (direction === 'se') {
            newWidth = Math.max(50, startWidth + e.clientX - startX); // Minimum width 50px
            newHeight = Math.max(50, startHeight + e.clientY - startY); // Minimum height 50px
        } else if (direction === 'nw') {
            newWidth = Math.max(50, startWidth - (e.clientX - startX)); // Minimum width 50px
            newHeight = Math.max(50, startHeight - (e.clientY - startY)); // Minimum height 50px
            box.style.left = `${startLeft + (e.clientX - startX)}px`;
            box.style.top = `${startTop + (e.clientY - startY)}px`;
        } else if (direction === 'ne') {
            newWidth = Math.max(50, startWidth + (e.clientX - startX)); // Minimum width 50px
            newHeight = Math.max(50, startHeight - (e.clientY - startY)); // Minimum height 50px
            box.style.top = `${startTop + (e.clientY - startY)}px`;
        } else if (direction === 'sw') {
            newWidth = Math.max(50, startWidth - (e.clientX - startX)); // Minimum width 50px
            newHeight = Math.max(50, startHeight + (e.clientY - startY)); // Minimum height 50px
            box.style.left = `${startLeft + (e.clientX - startX)}px`;
        }

        // Apply new dimensions to box
        box.style.width = `${newWidth}px`;
        box.style.height = `${newHeight}px`;
    }

    function stopResize() {
        document.documentElement.removeEventListener('mousemove', resize);
        document.documentElement.removeEventListener('mouseup', stopResize);
    }
}

// Function to generate the HTML and CSS code for the boxes
function generateCode() {
    let htmlCode = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Layout</title>\n    <style>\n`;
    let cssCode = '';
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {


        const rect = box.getBoundingClientRect();

        const offsetX = rect.left; // X coordinate relative to the parent
        const offsetY = rect.top - 98; // Y coordinate relative to the parent
        // alert(offsetY);

        const backgroundColor = box.style.backgroundColor;
        const boxWidth = (box.offsetWidth / (10 + boxesSection.clientWidth)) * 100; // Calculate percentage width
        const boxHeight = (box.offsetHeight / (60 + boxesSection.clientHeight)) * 100; // Calculate percentage height
        const boxLeft = (box.offsetLeft / (10 + boxesSection.clientWidth)) * 100; // Calculate percentage left
        const boxTop = (offsetY / 560) * 100; // Calculate percentage top



        cssCode += `    .box${index + 1} {\n        background-color: ${backgroundColor};\n        width: ${boxWidth}%;\n        height: ${boxHeight}px;\n        position: absolute;\n        left: ${boxLeft}%;\n        top: ${boxTop}%;\n    }\n`;
    });

    htmlCode += cssCode + `    </style>\n</head>\n<body>\n`;
    boxes.forEach((box, index) => {
        htmlCode += `    <div class="box box${index + 1}"></div>\n`;
    });
    htmlCode += `</body>\n</html>`;
    codeOutput.textContent = htmlCode; // Output the generated code
}

// Add event listeners
addBoxBtn.addEventListener('click', () => createBox(colorPicker.value));
generateCodeBtn.addEventListener('click', () => {
    generateCode();
});