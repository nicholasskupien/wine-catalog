/**
 * This file contains globally accessible helper variables and methods.
 *
 * You are free to add any additional helper methods and properties here
 * to help in your implementation.
 */

/**
 * global icons/symbols in html hex format
 */
export const ICON_CARET_LEFT = "\u25c0";
export const ICON_CARET_RIGHT = "\u25B6";
export const ICON_CARET_DOWN = "\u25bc";
export const ICON_CARET_UP = "\u25b2";
export const ICON_CLOSE = "\u2715";
export const ICON_ARROW_UP = "\u2191";
export const ICON_ARROW_DOWN = "\u2193";

// Taken from https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
// Import all images from a folder
export function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
