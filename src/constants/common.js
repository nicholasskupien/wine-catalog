/**
 * This file contains globally accessible helper variables and methods.
 *
 * You are free to add any additional helper methods and properties here
 * to help in your implementation.
 */

/**
 * global icons/symbols in html hex format
 */
export const ICON_LEFT_CARET = "\u25C2";
export const ICON_RIGHT_CARET = "\u25B8";
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
