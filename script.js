function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
 const element = document.querySelector('.section__text__p2');
const linesToType = [
  "Fullstack Web Developer",
  "MERN Stack Developer",
  "Frontend Developer"
];
const typingSpeed = 120; // Adjust typing speed in milliseconds
const delayBetweenLines = 800; // Adjust delay before the next statement appears (milliseconds)
const backspacingSpeed = 50; // Adjust backspacing speed in milliseconds
const delayAfterLine = 1000; // Adjust delay after a statement is fully typed (milliseconds)

let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (lineIndex < linesToType.length) {
    const currentLine = linesToType[lineIndex];

    if (charIndex < currentLine.length) {
      element.textContent += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Wait for a delay after the line is fully typed
      setTimeout(backspaceLine, delayAfterLine);
    }
  } else {
    // Optionally loop back to the beginning
    lineIndex = 0;
    setTimeout(typeWriter, delayBetweenLines);
  }
}

function backspaceLine() {
  if (element.textContent.length > 0) {
    element.textContent = element.textContent.slice(0, element.textContent.length - 1);
    setTimeout(backspaceLine, backspacingSpeed);
  } else {
    // Move to the next line after backspacing
    lineIndex++;
    charIndex = 0;
    setTimeout(typeWriter, delayBetweenLines);
  }
}

// Start the typing animation when the script loads
document.addEventListener('DOMContentLoaded', () => {
  element.textContent = ""; // Clear the initial text
  typeWriter();
});