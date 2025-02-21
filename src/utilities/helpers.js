import { parse, parseISO, format } from 'date-fns'

export const formattedCurrencyNumber = (number) => {
  // Convert the input to a number if it's a string
  const parsedNumber = typeof number === 'string' ? parseFloat(number) : number

  // Check if the parsed number is valid
  if (isNaN(parsedNumber)) {
    throw new Error('Invalid number provided')
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

  // Define the prepositions to look for
  const prepositions = ['THE', 'AN', 'A']

  // Find the index of the preposition in the split array
  let prepositionIndex = -1
  for (let i = 0; i < split.length; i++) {
    const word = split[i].replace(/[^a-zA-Z0-9?!)]+$/, '') // Remove trailing punctuation
    if (prepositions.includes(word.toUpperCase())) {
      prepositionIndex = i
      break
    }
  }

  // If a preposition is found, move it to the beginning
  if (prepositionIndex !== -1) {
    const preposition = split[prepositionIndex]
    const titleWithoutPreposition = [
      ...split.slice(0, prepositionIndex),
      ...split.slice(prepositionIndex + 1),
    ].join(' ')

    // Reconstruct the title with the preposition at the start
    return `${preposition} ${titleWithoutPreposition}`
  }

  // If no preposition is found, return the original title
  return trimmedStr
}

export const formatDateString = (dateString) => {
  try {
    // Parse the date string (e.g., 'July 23, 2023')
    const date = parse(dateString, 'MMMM d, yyyy', new Date())

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date' // or return an empty string or placeholder
    }

    // Format the date as 'MM/dd/yyyy'
    return format(date, 'MM/dd/yyyy')
  } catch (error) {
    console.error('Error formatting date:', error)
    return 'Invalid Date' // or return an empty string or placeholder
  }
}


export const formatContractDate = (dateString) => {
  if (!dateString || typeof dateString !== 'string') {
    return ''
  }
  // Parse the date string (e.g., '2025-01-03' or '2025-01-03T00:00:00-05:00')
  const date = parseISO(dateString)
  // Format the date as 'MM/DD/YYYY'
  return format(date, 'MM/dd/yyyy')
}
