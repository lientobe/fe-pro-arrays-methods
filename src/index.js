import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => goods.filter(item => item.brand === brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => goods.filter(item => item.color === color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => goods.filter(item => item.model === model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => goods.filter(item => item.memory === memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => goods.filter(item => item.price === price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => goods.filter(item => item.country === country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => goods.filter(item => item.os === os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter((item) => item.price >= from && item.price <= to);

const minPriceReducer = () => goods.reduce((accumulator, good) => Math.min(accumulator, good.price), Infinity);

const maxPriceReducer = () => goods.reduce((accumulator, good) => Math.max(accumulator, good.price), -Infinity);

const toMaxSorter = () => goods.sort((firstGood, secondGood) => secondGood.price - firstGood.price);

const toMinSorter = () => goods.sort((firstGood, secondGood) => firstGood.price - secondGood.price);

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
