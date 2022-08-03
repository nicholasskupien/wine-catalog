/**
 * This file contains helper variables and methods pertaining to information
 * about category.
 *
 * TODO: You are free to add any additional helper methods and properties here
 * to help in your implementation.
 */

/**
 * This property indicates the English label for a given category code. This will
 * be required for rendering the categories onto the UI.
 *
 * @property CATEGORY_LABELS
 * @type {Object}
 */

// TODO create category state enum and include below

export const CATEGORY_LABELS = {
  ALL: "All",
  RED: "Red Wine",
  WHITE: "White Wine",
  ROSE: "Rosé Wine",
  CHAMPAGNE: "Champagne",
  SPARKLING: "Sparkling Wine",
  DESSERT: "Dessert Wine",
  ICEWINE: "Icewine",
  FORTIFIED: "Fortified Wines",
  SPECIALTY: "Specialty Wines",
};

export const ALL_CATEGORY = "ALL";

export const DEFAULT_CATEGORY = ALL_CATEGORY;
