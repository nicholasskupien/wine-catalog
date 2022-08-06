/**
 * This file contains helper variables and methods pertaining to information
 * about category.
 *
 * TODO: You are free to add any additional helper methods and properties here
 * to help in your implementation.
 */

/**
 * This property indicates the possible states for the categories.
 *
 * @property CATEGORY_STATE
 */
export const CATEGORY_STATE = {
  ALL: 0,
  RED: 1,
  WHITE: 2,
  ROSE: 3,
  CHAMPAGNE: 4,
  SPARKLING: 5,
  DESSERT: 6,
  ICEWINE: 7,
  FORTIFIED: 8,
  SPECIALTY: 9,
};

/**
 * This property indicates the English label for a given category code. This will
 * be required for rendering the categories onto the UI.
 *
 * @property CATEGORY_STATE_LABELS
 * @type {object}
 */
export const CATEGORY_STATE_LABELS = {
  [CATEGORY_STATE.ALL]: "All",
  [CATEGORY_STATE.RED]: "Red Wine",
  [CATEGORY_STATE.WHITE]: "White Wine",
  [CATEGORY_STATE.ROSE]: "Rosé Wine",
  [CATEGORY_STATE.CHAMPAGNE]: "Champagne",
  [CATEGORY_STATE.SPARKLING]: "Sparkling Wine",
  [CATEGORY_STATE.DESSERT]: "Dessert Wine",
  [CATEGORY_STATE.ICEWINE]: "Icewine",
  [CATEGORY_STATE.FORTIFIED]: "Fortified Wines",
  [CATEGORY_STATE.SPECIALTY]: "Specialty Wines",
};

/**
 * CATEGORY_STATE which represents 'no filtering' or 'all' of the categories at once.
 */
export const ALL_CATEGORY = CATEGORY_STATE.ALL;

/**
 * CATEGORY_STATE which represents the default category.
 */
export const DEFAULT_CATEGORY = CATEGORY_STATE.ALL;
