/* eslint-disable no-redeclare */

import { CATEGORY_STATE } from "./category";

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
  this.getName = function () {
    return _name;
  };
  this.getVolume = function () {
    return _volume;
  };
  this.getPrice = function () {
    return parseFloat(_price.slice(1));
  };
  this.getCountry = function () {
    return _country;
  };
  this.getProducer = function () {
    return _producer;
  };
  /* TODO: Implement additional helpers here */
}

export default CatalogItem;
