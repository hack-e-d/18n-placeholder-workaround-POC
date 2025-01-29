const fs = require('fs');

function replacePlaceHolderWithInterpolation(xliffFilePath) {
  try {
    const data = fs.readFileSync(xliffFilePath, 'utf-8');

    const newData = data.replace(/PH/g, 'INTERPOLATION');

    fs.writeFileSync(xliffFilePath, newData, 'utf-8');

    console.log(`Successfully replaced "PH" with "INTERPOLATION" in ${xliffFilePath}`);
  } catch (err) {
    console.error(`Error processing ${xliffFilePath}:`, err);
  }
}

// Usage example:
const xliffFile = 'path/to/your/xliff.xlf';
replacePlaceHolderWithInterpolation('src/assets/localization/messages.xlf');

