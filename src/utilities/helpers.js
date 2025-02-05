export const formattedNumber = (number) => {
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