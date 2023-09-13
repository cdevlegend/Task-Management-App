/**
 * This function is used to format number
 */

export const formatNumberWithDigitString = (
  num: number,
  digit_count: number = 3
) => {
  const numberString = String(num); // Convert the number to a string
  const zerosToAdd = Math.max(0, digit_count - numberString.length); // Calculate the number of leading zeros needed
  return "0".repeat(zerosToAdd) + numberString; // Add leading zeros and concatenate
};
