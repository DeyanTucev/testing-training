"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    //TODO Missing private attributs
    #_articleId
    #_name
    #_quantity
    #_price
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#articleId = articleId;
        this.#name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        //TODO Implement this method
        return this.#_articleId
    }

    get name() {
        //TODO Implement this method
        return this.#_name;
    }

    get quantity() {
        //TODO Implement this method
        return this.#_quantity;
    }

    set quantity(value) {
        //TODO Implement this method
        this.#validateQuantity(value);
        this.#_quantity = value;
    }

    get price() {
        //TODO Implement this method
        return this.#_price;
    }

    set price(value) {
        //TODO Implement this method
        this.#validatePrice(value);
        this.#_price = value;
    }

    get total() {
        //TODO Implement this method
        return this.#_quantity * this.#_price;
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        //TODO Implement this method
        this.#validateArticleId(value);
        this.#_articleId = value;
    }

    set #name(value) {
        if (typeof value !== 'string' || !value.trim()) {
            throw new Error("Name must be a non-empty string");
        }
        this.#_name = value;
    }

    #validateArticleId(articleId) {
        //TODO Implement this method
        if (typeof articleId !== "number" || articleId < 1) {
            throw new InvalidArticleIdException();
        }
    }

    #validateQuantity(quantity) {
        //TODO Implement this method
        if (typeof quantity !== "number" || quantity < 1) {
            throw new InvalidQuantityException();
        }
    }

    #validatePrice(price) {
        //TODO Implement this method
        if (typeof price !== "number" || price < 10) {
            throw new InvalidPriceException();
        }
    }
    //endregion private methods
}



