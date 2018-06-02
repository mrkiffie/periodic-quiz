export function formatScore(score: number, count: number) {
  return `${(100 * (score / count) || 0).toFixed(2)}%`;
}
