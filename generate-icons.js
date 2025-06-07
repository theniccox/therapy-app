// Generate SVG icons programmatically
const fs = require('fs');
const path = require('path');

// Create a simple SVG icon with the letter "T" for Therapy Finder
function generateIcon(size) {
  const padding = Math.floor(size * 0.15);
  const fontSize = Math.floor(size * 0.5);
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="#2E8B57" rx="${size * 0.1}" ry="${size * 0.1}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${fontSize}px" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">T</text>
    <circle cx="${size/2}" cy="${size/2}" r="${size/2 - padding}" fill="none" stroke="white" stroke-width="${size * 0.03}" stroke-opacity="0.3" />
  </svg>`;
}

// Generate icons in different sizes
const sizes = [192, 512];
const iconsDir = path.join(__dirname, 'public', 'icons');

// Ensure the directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate and save icons
sizes.forEach(size => {
  const iconContent = generateIcon(size);
  fs.writeFileSync(path.join(iconsDir, `icon-${size}x${size}.svg`), iconContent);
  console.log(`Generated icon-${size}x${size}.svg`);
});

console.log('Icon generation complete!');
