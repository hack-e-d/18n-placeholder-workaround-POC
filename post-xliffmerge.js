const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();
const builder = new xml2js.Builder();

fs.readFile('src/assets/localization/messages.ar.xlf', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  parser.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    const xliff = result['xliff'];
    const transUnits = xliff.file[0].body[0]['trans-unit'];

    let no = 1;
    transUnits.forEach(unit => {
      console.log("Unit number : " + no++);
      // Access individual elements within the unit
      const source = unit.source[0].x // Access source text
      const target = unit.target[0].x; // Access target text
      console.log("source and target");
      console.log(source);
      console.log(target);
      if (true) {
        if(!source[0].$['equiv-text'].includes("{{")) {
          source.forEach(s => {
            s.$.id = s.$.id.replace("INTERPOLATION", "PH");
            console.log(s);
          });

          target.forEach(t => {
            t.$.id = t.$.id.replace("INTERPOLATION", "PH");
            console.log(t);
          });
        }
      }
    });

    const newXml = builder.buildObject(result);

    fs.writeFile('src/assets/localization/messages.ar.xlf', newXml, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File replaced successfully!');
      }
    });
  });
});
