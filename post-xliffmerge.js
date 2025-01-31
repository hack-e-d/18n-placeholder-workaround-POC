const fs = require('fs');

function replacePlaceHolderWithInterpolation(xliffFilePath) {
  try {
    const data = fs.readFileSync(xliffFilePath, 'utf-8');

    const lines = data.split('\n');

    let newLine = [];

    lines.forEach(line => {

      if (line.includes('<x id="INTERPOLATION') && !line.includes('equiv-text="{{')) {
        line = line.replace(/INTERPOLATION/g, 'PH');
      }

      newLine.push(line);
    });

    const newData = newLine.join('\n');

    fs.writeFileSync(xliffFilePath, newData, 'utf-8');

    console.log(`Successfully replaced "PH" with "INTERPOLATION" in ${xliffFilePath}`);
  } catch (err) {
    console.error(`Error processing ${xliffFilePath}:`, err);
  }
}

const langs = [".en", ".fr", ".de", ".ar", ""];
for (let i = 0; i < langs.length; i++) {
  replacePlaceHolderWithInterpolation(`src/assets/localization/messages${langs[i]}.xlf`);
}



