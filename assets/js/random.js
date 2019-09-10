// @ts-check

/**
 * @param {number} min
 * @param {number} max
 */
export function randomNumber(min, max) {
  return min + Math.random() * (max - min);
}

/**
 * @param {number} min
 * @param {number} max
 */
export function randomInt(min, max) {
  const span = (max - min) | 0;
  return min + ((Math.random() * span) | 0);
}

/**
 * @param {unknown[]} options
 */
export function randomOption(options) {
  const selected = randomInt(0, options.length);
  return options[selected];
}
