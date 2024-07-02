export default function updateUniqueItems(map) {
  for (const [key, val] of map) {
    if (val === 1) {
      map.set(key, 100);
      if (map.get(key) !== 100) {
        throw new Error('Cannot process');
      }
    }
  }
  return map;
}
