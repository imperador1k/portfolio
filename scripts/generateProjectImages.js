const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const iconsDir = path.join(__dirname, '../public/System/Icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate simple SVG placeholders for project images
const projectImages = [
  { name: 'fitness.webp', color: '#FF6B6B' },
  { name: 'shopping.webp', color: '#4ECDC4' },
  { name: 'hotel.webp', color: '#FFD166' },
  { name: 'vacation.webp', color: '#6A0572' },
  { name: 'restaurant.webp', color: '#1A936F' },
  { name: 'training.webp', color: '#118AB2' }
];

projectImages.forEach(image => {
  const svgContent = `
<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="${image.color}" rx="8"/>
  <circle cx="24" cy="24" r="12" fill="white" opacity="0.3"/>
  <rect x="16" y="16" width="16" height="16" fill="white" opacity="0.5"/>
</svg>
`.trim();

  const filePath = path.join(iconsDir, image.name);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created ${image.name}`);
});

console.log('All project images generated successfully!');