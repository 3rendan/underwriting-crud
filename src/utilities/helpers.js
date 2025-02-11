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
