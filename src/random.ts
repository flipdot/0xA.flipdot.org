export function randomNumber(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function randomInt(min: number, max: number) {
  const span = (max - min) | 0;
  return min + ((Math.random() * span) | 0);
}

export function randomOption<T>(options: readonly T[]): T {
  const selected = randomInt(0, options.length);
  return options[selected];
}
