// TODO unit tests
export function formatDuration(ms: number): string {
  const sec = Math.floor(ms / 1000);
  const minutes = Math.floor(sec / 60);
  const seconds = `0${sec % 60}`.slice(-2);

  return `${minutes}:${seconds}`;
}
