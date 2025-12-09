"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    // private fields
    #_articleId;
    #_name;
    #_quantity;
    #_price;

    constructor(articleId, name, quantity, price) {
        this.#articleId = articleId;
        this.#name = name;
        this.quantity = quantity;
        this.price = price;
    }

    // getters
    get articleId() {
        return this.#_articleId;
    }

    get name() {
        return this.#_name;
    }

    get quantity() {
        return this.#_quantity;
    }

    set quantity(value) {
        this.#validateQuantity(value);
        this.#_quantity = value;
    }

    get price() {
        return this.#_price;
    }

    set price(value) {
        this.#validatePrice(value);
        this.#_price = value;
    }

    get total() {
        return this.#_quantity * this.#_price;
    }

    // private setters
    set #articleId(value) {
        this.#validateArticleId(value);
        this.#_articleId = value;
    }

    set #name(value) {
        if (typeof value !== "string" || !value.trim()) {
            throw new Error("Name must be a non-empty string");
        }
        this.#_name = value;
    }

    // validation methods
    #validateArticleId(articleId) {
        if (typeof articleId !== "number" || articleId < 1) {
            throw new InvalidArticleIdException();
        }
    }

    #validateQuantity(quantity) {
        if (typeof quantity !== "number" || quantity < 1) {
            throw new InvalidQuantityException();
        }
    }

    #validatePrice(price) {
        if (typeof price !== "number" || price < 10) {
            throw new InvalidPriceException();
        }
    }
};
