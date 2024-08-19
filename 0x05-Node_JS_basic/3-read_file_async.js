const fs = require('fs').promises;

/**
 * Counts students by field and logs the results.
 * @param {string} path - Path to the CSV file.
 * @throws {Error} Throws an error with the message "Cannot load the database" if the file cannot be read.
 */
async function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the content into lines and process the CSV data
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Extract header and rows
    const [header, ...rows] = lines;

    // Parse the header to find the column indices
    const [firstnameHeader, lastnameHeader, ageHeader, fieldHeader] = header.split(',').map(col => col.trim());
    if (firstnameHeader !== 'firstname' || lastnameHeader !== 'lastname' || ageHeader !== 'age' || fieldHeader !== 'field') {
      throw new Error('Cannot load the database');
    }

    const fieldData = {};

    // Process each row
    rows.forEach(row => {
      const [firstname, lastname, age, field] = row.split(',').map(cell => cell.trim());

      // Skip if any field is missing
      if (firstname && lastname && age && field) {
        if (!fieldData[field]) {
          fieldData[field] = { count: 0, names: [] };
        }

        fieldData[field].count += 1;
        fieldData[field].names.push(firstname);
      }
    });

    // Calculate total number of students
    const totalStudents = Object.values(fieldData).reduce((acc, data) => acc + data.count, 0);

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log number of students per field and their names
    for (const [field, data] of Object.entries(fieldData)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
    }

  } catch (error) {
    // Throw a new error with the message "Cannot load the database"
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
