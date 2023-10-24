export function getFormattedDate(date: string | Date): string {
  date = new Date(date);

  const ret = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${(date.getDate() + 1).toString().padStart(2, '0')}`;

  return ret;
}
