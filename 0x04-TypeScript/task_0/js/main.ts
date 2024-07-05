export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = { firstName: 'Eric', lastName: 'Uwiri', age: 24, location: 'Kigali'};
const student2: Student = { firstName: 'Isabelle', lastName: 'Iradu', age: 22, location: 'Huye'};

const studentsList: Student[] = [student1, student2];

export function renderTable(data: Student[]): void {
  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';

  const headerRow = document.createElement('tr');

  const headers = ['First Name', 'Location'];
  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    header.style.border = '1px solid black';
    header.style.padding = '8px';
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  data.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
