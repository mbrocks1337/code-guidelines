export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function slugify(text: string, delimiter = "-") {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .replace(/[\s_]+/g, delimiter)
    .replace(new RegExp(`${delimiter}+`, "g"), delimiter)
    .replace(new RegExp(`^${delimiter}|${delimiter}$`, "g"), "")
    .toLowerCase();
}
