import { parse, format } from 'date-fns'

export const formattedCurrencyNumber = (number) => {
  // Convert the input to a number if it's a string
  const parsedNumber = typeof number === 'string' ? parseFloat(number) : number;

  // Check if the parsed number is valid
  if (isNaN(parsedNumber)) {
    throw new Error('Invalid number provided');
  }

  return parsedNumber.toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD' 
  })
}

export const displayTitle = (str) => {
  // Trim the string to remove leading/trailing whitespace
  const trimmedStr = str.trim()

  // Split the title into an array of words
  const split = trimmedStr.split(' ')

  // Get the last word and remove any trailing punctuation except ?, !, and )
  let lastWord = split[split.length - 1]
  lastWord = lastWord.replace(/[^a-zA-Z0-9?!)]+$/, '')

  // Check if the last word is a preposition (THE, AN, A)
  const lastWordIsPre = ['THE', 'AN', 'A'].includes(lastWord.toUpperCase())

  // Format the title based on whether the last word is a preposition
  let title
  if (lastWordIsPre) {
    // Remove the last word and add it to the beginning
    const titleWithoutLastWord = split.slice(0, -1).join(' ')
    title = `${lastWord} ${titleWithoutLastWord}`
  } else {
    // Keep the title as is
    title = trimmedStr.replace(/[^a-zA-Z0-9?!)]+$/, '')
  }

  return title
}

export const formatProjectedReleaseDate = (dateString) => {
  // Parse the date string (e.g., 'Saturday, October 26, 2019 (RAPID)')
  const date = parse(dateString, "EEEE, MMMM dd, yyyy '(RAPID)'", new Date())
  // Format the date as 'Day, Month DD, YYYY'
  return format(date, 'EEEE, MMMM dd, yyyy')
}

export const formatContractDate = (dateString) => {
  // Parse the date string (e.g., '2025-10-25')
  const date = parse(dateString, 'yyyy-MM-dd', new Date())
  // Format the date as 'Day, Month DD, YYYY'
  return format(date, 'EEEE, MMMM dd, yyyy')
}
