export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeobj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeobj ? gradeobj.grade : 'N/A',
      };
    });
}
