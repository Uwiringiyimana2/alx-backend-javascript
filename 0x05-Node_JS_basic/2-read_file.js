const fs = require('node:fs');
const csv = require('csv-parser');


const countStudents = (path) => {
  const fieldData = {}
  try {
    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        if (row && row.field && row.firstname) {
	  const field = row.field;
	  const firstname = row.firstname;

	  if (!fieldData[field]) {
	    fieldData[field] = { 'count': 0, 'names': [] };
	  }

	  fieldData[field].count += 1;
	  fieldData[field].names.push(firstname);
	}
      })
     .on('end', () => {
       const total = Object.values(fieldData).reduce((acc, data) => acc + data.count, 0);
       console.log(`Number of students: ${totalStudents}`);
       for (const [field, data] of Object.entries(fieldData)) {
          console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
        }
     .on('error', (error) => {
        // Handle errors while reading the file
        throw new Error('Cannot load the database');
      });
     })
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
