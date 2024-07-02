export default function getListStudentIds(array) {
  if (Array.isArray(array) === false) {
    return [];
  }
  return array.map((obj) => obj.id);
}
