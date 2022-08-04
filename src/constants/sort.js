/**
 * This file contains helper variables and methods pertaining to information
 * about sort and sort order.
 *
 */

import { ICON_ARROW_DOWN, ICON_ARROW_UP } from "./common";

//TODO figure out java docs to document these correctly

/**
 * Possible states/fields to sort on
 */
export const SORT_STATE = {
  NAME: 0,
  CATEGORY: 1,
  VOLUME: 2,
  PRICE: 3,
  COUNTRY: 4,
  PRODUCER: 5,
};

/**
 * Labels for SORT_STATE
 */
export const SORT_STATE_LABELS = {
  [SORT_STATE.NAME]: "Name",
  [SORT_STATE.CATEGORY]: "Category",
  [SORT_STATE.VOLUME]: "Volume",
  [SORT_STATE.PRICE]: "Price",
  [SORT_STATE.COUNTRY]: "Country",
  [SORT_STATE.PRODUCER]: "Producer",
};

/**
 * Possible sort directions.
 * ASC: Ascending
 * DESC: Descending
 */
export const SORT_DIRECTION = {
  ASC: 0,
  DESC: 1,
};

/**
 * SORT_DIRECTION defaults
 */
export const SORT_DIRECTION_LABELS = {
  [SORT_DIRECTION.ASC]: ICON_ARROW_UP,
  [SORT_DIRECTION.DESC]: ICON_ARROW_DOWN,
};

/**
 * SORT_STATE and SORT_DIRECTION defaults
 *
 * @param {number} sortState default SORT_STATE
 * @param {number} sortDirection default SORT_DIRECTION
 */
export const DEFAULT_SORT = {
  sortState: SORT_STATE.NAME,
  sortDirection: SORT_DIRECTION.ASC,
};

/**
 * Array.sort() compare function. Text based sort, for sorting two strings.
 * sorts ascending or descending based on parameters.
 *
 * Usage: array.sort((a, b) => sortStrings(a,b,sortDirection));
 *
 * @function sortStrings Case-insensitive sort
 * @param {String} a first item to sort
 * @param {String} b second item to sort
 * @param {String} direction direction to sort. "ASC" for ascending or anything else for descending.
 * Reference: https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically
 */
export function sortStrings(a, b, direction) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  const dir = direction === SORT_DIRECTION.ASC ? 1 : -1;

  return a < b ? -dir : a > b ? dir : 0;
}

/**
 * Array.sort() compare function. numeric sort, ignoring any text that is not a digit.
 * sorts ascending or descending based on parameters.
 *
 * Usage: array.sort((a, b) => sortNumbers(a,b,sortDirection));
 *
 * @function sortStrings
 * @param {String} a first item to sort
 * @param {String} b second item to sort
 * @param {String} direction direction to sort. "ASC" for ascending or anything else for descending.
 */
export function sortNumbers(a, b, direction) {
  // regex match on digits (0-9) and ignore everything else
  a = parseFloat(a.toString().replace(/[A-Za-z_$]/g, "")); // try \s for regex
  b = parseFloat(b.toString().replace(/[A-Za-z_$]/g, ""));

  // console.log(a,b);

  const dir = direction === SORT_DIRECTION.ASC ? 1 : -1;

  return a < b ? -dir : a > b ? dir : 0;
}
