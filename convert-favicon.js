const sharp = require('sharp');
const fs = require('fs');

async function convertPngToIco() {
  try {
    // Read the about-me.png file
    const inputPath = 'public/Users/Public/Pictures/about-me.png';
    const outputPath = 'public/favicon.ico';
    
    // Convert PNG to ICO format
    // ICO files typically contain multiple sizes, so we'll create a 32x32 version
    await sharp(inputPath)
      .resize(32, 32)
      .toFormat('ico')
      .toFile(outputPath);
    
    console.log('Favicon converted successfully!');
  } catch (error) {
    console.error('Error converting favicon:', error);
  }
}

convertPngToIco();