/**
 * This file contains helper variables and methods pertaining to information
 * about sort and sort order.
 *
 */

// A list of parameters that can be sorted on
export const SORT_BY = {
  NAME: "Name",
  CATEGORY: "Category",
  VOLUME: "Volume",
  PRICE: "Price",
  COUNTRY: "Country",
  PRODUCER: "Producer",
};

// Allowed directions of sort
// ASC = ASCending
// DESC = DESCending
export const SORT_DIR = {
  ASC: "\u2191",
  DESC: "\u2193",
};

// Default sort parameter and order
export const DEFAULT_SORT = {
  sortBy: "NAME",
  sortDirection: "ASC",
};

/**
 * @function sortStrings Case-insensitive sort
 * @param a {String} first item to sort
 * @param b {String} second item to sort
 * @param direction {String} direction to sort. "ASC" for ascending or anything else for descending.
 * Reference: https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically
 */
export function sortStrings(a, b, direction) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  const dir = direction == "ASC" ? 1 : -1;

  return a < b ? -dir : a > b ? dir : 0;
}

/**
 * @function sortStrings numeric sort, ignoring any text that is not a digit
 * @param a {String} first item to sort
 * @param b {String} second item to sort
 * @param direction {String} direction to sort. "ASC" for ascending or anything else for descending.
 */
export function sortNumbers(a, b, direction) {
  // regex match on digits (0-9) and ignore everything else
  a = parseFloat(a.toString().replace(/[A-Za-z_$]/g, "")); // try \s for regex
  b = parseFloat(b.toString().replace(/[A-Za-z_$]/g, ""));

  // console.log(a,b);

  const dir = direction == "ASC" ? 1 : -1;

  return a < b ? -dir : a > b ? dir : 0;
}
