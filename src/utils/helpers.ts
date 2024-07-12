export const formatDateString = (dateString: string) => {
  const [datePart] = dateString.split(' ')
  const [month, day, year] = datePart.split('/')

  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}
