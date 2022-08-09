import { CATEGORY_STATE, CATEGORY_STATE_LABELS } from "./category";
import { SORT_STATE_LABELS, SORT_STATE } from "./sort";

/**
 * This prototypal object definition defines a generic catalog item.
 *
 * TODO: You are free to add any additional helper methods and properties here
 * to help in your implementation.
 *
 * @class CatalogItem
 * @param {String} id The unique id for this item.
 * @param {String} category The item category.
 * @param {String} name The item name.
 * @param {String} volume The description of the item's volume.
 * @param {String} price The price of this item.
 * @param {String} country The country code for this item's origin.
 * @param {String} producer The producer of this item.
 */
function CatalogItem(id, category, name, volume, price, country, producer) {
  // declare these as private variables
  const _id = id;
  const _category = category;
  const _name = name;
  const _volume = volume;
  const _price = price;
  const _country = country;
  const _producer = producer;

  // simple getter methods
  this.getId = function () {
    return _id;
  };
  this.getCategory = function () {
    return CATEGORY_STATE[_category];
  };
  /**
   * Get the category label
   * @returns Category in localized text instead of enum
   */
  this.getCategoryLabel = function () {
    // could do CATEGORY_STATE_LABELS[this.getCategory()] but what if this.getCategory() changes?
    return CATEGORY_STATE_LABELS[CATEGORY_STATE[_category]];
  };
  this.getName = function () {
    return _name;
  };
  this.getVolume = function () {
    return _volume;
  };
  this.getPrice = function () {
    return parseFloat(_price.slice(1));
  };
  /**
   * Get a formatted string to represent the price
   * @returns Price with string style "$#.##"
   */
  this.getPriceString = function () {
    return "$" + this.getPrice().toFixed(2);
  };
  this.getCountry = function () {
    return _country;
  };
  this.getProducer = function () {
    return _producer;
  };
  /**
   * Get a list of details about this catalog item.
   * These are displayed when viewing the detail state.
   * Add any additional details that may be useful to show.
   * @returns a list of objects with the detail label and value
   */
  this.getDetailsList = function () {
    return [
      {
        label: SORT_STATE_LABELS[SORT_STATE.CATEGORY],
        value: this.getCategoryLabel(),
      },
      {
        label: SORT_STATE_LABELS[SORT_STATE.VOLUME],
        value: this.getVolume(),
      },
      {
        label: SORT_STATE_LABELS[SORT_STATE.PRICE],
        value: this.getPriceString(),
      },
      {
        label: SORT_STATE_LABELS[SORT_STATE.COUNTRY],
        value: this.getCountry(),
      },
      {
        label: SORT_STATE_LABELS[SORT_STATE.PRODUCER],
        value: this.getProducer(),
      },
    ];
  };
  /* TODO: Implement additional helpers here */
}

export default CatalogItem;
